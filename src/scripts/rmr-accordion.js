// behaviour / markup based on http://heydonworks.com/practical_aria_examples/#progressive-collapsibles
// expanding to height: auto based on https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5

(() => {

  'use strict';


  const enhanceMarkup = (accordion, index, config) => {

    const collapse = element => {
      // get the height of the element's inner content, regardless of its actual size
      const height = element.scrollHeight;

      // temporarily disable all css transitions
      const elementTransition = element.style.transition;
      element.style.transition = '';

      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function() {
          element.style.height = `${height}px`;
          element.style.transition = elementTransition;

          // on the next frame (as soon as the previous style change has taken effect),
          // have the element transition to height: 0
          requestAnimationFrame(function() {
              element.setAttribute('aria-hidden', 'true')
              element.style.height = null;
          });
      });
    };

    const expand = element => {
      // get the height of the element's inner content, regardless of its actual size
      var height = element.scrollHeight;

      // have the element transition to the height of its inner content
      element.style.height = height + 'px';

      const tidyUp = () => {
          element.removeEventListener('transitionend', tidyUp);
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = null;
      };

      // when the next css transition finishes (which should be the one we just triggered)
      element.addEventListener('transitionend', tidyUp);
    };

    const accordionClick = e => {
      e.preventDefault()

      const
        target = e.target,
        accordion = target.closest('.rmr-accordion'),
        toggle = accordion.querySelector('.rmr-accordion-toggle'),
        collapsible = document.getElementById(
          toggle.getAttribute('aria-controls')
        );

      if (accordion.classList.contains('rmr-disabled')) {
        return;
      }

      if (! collapsible) {
        return;
      }

      if (toggle.getAttribute('aria-expanded') === 'false') {
        toggle.setAttribute('aria-expanded', 'true');
        expand(collapsible);
        collapsible.removeAttribute('aria-hidden');
        accordion.classList.add('rmr-open');
      } else {
        toggle.setAttribute('aria-expanded', 'false');
        collapse(collapsible);
        accordion.classList.remove('rmr-open');
      }
    };


    const
      id = `rmr-accordion-${index}`,
      isOpen = accordion.classList.contains('rmr-open'),
      title = accordion.querySelector('.rmr-accordion-title'),
      button = accordion.querySelector('.rmr-accordion-toggle'),
      pane = accordion.querySelector('.rmr-accordion-pane'),
      children = [...pane.childNodes],
      collapsible = document.createElement('div');

    collapsible.setAttribute('aria-hidden', !isOpen);
    collapsible.setAttribute('class', 'rmr-accordion-contents');
    collapsible.setAttribute('id', id);

    pane.appendChild(collapsible);
    children.forEach(node => {
      collapsible.appendChild(node)
    });

    if (button) {
      button.setAttribute('aria-expanded', isOpen);
      button.setAttribute('aria-controls', id);
    }
    title.addEventListener('click', accordionClick);
    accordion.setAttribute('data-rmr-init', true);
  };


  const initAccordions = (config) => {

    let
      count = 0,
      accordion;

    while ((count === 0) || accordion) {
      accordion = document.querySelector('.rmr-accordion:not([data-rmr-init]');
      if (accordion) {
        enhanceMarkup(accordion, count, config);
      }
      count++;
    }
  };

  module.exports = initAccordions;
})();

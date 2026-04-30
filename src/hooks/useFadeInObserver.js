import { useEffect } from 'react';

export function useFadeInObserver(selector, options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          let delay = 0;
          if (options.staggerSelector) {
            const parent = entry.target.closest(options.staggerSelector);
            if (parent && entry.target.parentElement === parent) {
              delay = Array.from(parent.children).indexOf(entry.target) * 80;
            }
          }

          window.setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: options.threshold ?? 0.1 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [options.staggerSelector, options.threshold, selector]);
}

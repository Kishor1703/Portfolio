import { useEffect, useRef, useState } from "react";

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useCountUp(target, run) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) {
      return undefined;
    }

    let start = null;

    const step = (timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / 2200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);

    return undefined;
  }, [run, target]);

  return value;
}

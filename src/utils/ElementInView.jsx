import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useElementInView = (querySelector) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(querySelector);
    elements.forEach((element) => {
      element.style.animationPlayState = inView ? 'running' : 'paused';
    });
  }, [inView, querySelector]);

  return { ref, inView };
};

export default useElementInView;

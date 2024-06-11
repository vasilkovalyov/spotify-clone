import { useEffect, useRef } from 'react';
import { LoadMoreProviderProps } from './load-more-provider.type';

function LoadMoreProvider({
  children,
  isWork = true,
  deps = [],
  observerOptions,
  callback,
}: LoadMoreProviderProps) {
  const refEl = useRef(null);

  function onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) callback();
    });
  }

  useEffect(() => {
    if (!isWork) return;

    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.5,
      ...observerOptions,
    });

    if (observer && refEl?.current) {
      observer.observe(refEl.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, deps);

  return (
    <>
      {children}
      <div ref={refEl}></div>
    </>
  );
}

export default LoadMoreProvider;

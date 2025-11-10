
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  placeholderHeight?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children, placeholderHeight = '70vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px 200px 0px', // Start loading when the component is 200px from the viewport
        threshold: 0.01
      }
    );

    const currentRef = placeholderRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={placeholderRef} style={{ minHeight: !isVisible ? placeholderHeight : 'auto' }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoad;

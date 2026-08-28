import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: 'transform, opacity'
    };

    if (isVisible) {
      return {
        ...base,
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)'
      };
    }

    switch (animation) {
      case 'fade-up':
        return { ...base, opacity: 0, transform: 'translate3d(0, 40px, 0)' };
      case 'fade-down':
        return { ...base, opacity: 0, transform: 'translate3d(0, -40px, 0)' };
      case 'fade-left':
        return { ...base, opacity: 0, transform: 'translate3d(40px, 0, 0)' };
      case 'fade-right':
        return { ...base, opacity: 0, transform: 'translate3d(-40px, 0, 0)' };
      case 'zoom-in':
        return { ...base, opacity: 0, transform: 'scale(0.92)' };
      case 'flip-up':
        return { ...base, opacity: 0, transform: 'perspective(1000px) rotateX(25deg) translate3d(0, 30px, 0)' };
      default:
        return { ...base, opacity: 0, transform: 'translate3d(0, 40px, 0)' };
    }
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

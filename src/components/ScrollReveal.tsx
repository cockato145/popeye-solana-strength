import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const directionClass = {
    up: 'scroll-reveal',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
  }[direction];

  return (
    <div 
      ref={ref} 
      className={cn(directionClass, isVisible && 'visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

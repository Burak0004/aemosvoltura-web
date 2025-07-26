import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeSlideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeSlideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

interface RevealProps {
  children: React.ReactNode;
  variant?: 'fadeSlideUp' | 'fadeSlideLeft' | 'fadeSlideRight' | 'scaleIn';
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, variant = 'fadeSlideUp', delay = 0, className = '' }: RevealProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  
  const variants = {
    fadeSlideUp,
    fadeSlideLeft,
    fadeSlideRight,
    scaleIn
  };

  const selectedVariant = {
    ...variants[variant],
    visible: {
      ...variants[variant].visible,
      transition: {
        ...variants[variant].visible.transition,
        delay: delay
      }
    }
  };

  return (
    <motion.div 
      ref={ref} 
      variants={selectedVariant} 
      initial="hidden" 
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};
import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with basic configuration
    const lenis = new Lenis();

    // Make Lenis available globally for scroll utilities
    (window as any).lenis = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);
};
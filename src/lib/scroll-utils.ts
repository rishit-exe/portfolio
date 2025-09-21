export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Check if Lenis is available on window
    const lenis = (window as any).lenis;
    if (lenis) {
      // Use Lenis smooth scroll
      lenis.scrollTo(element, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      // Fallback to native smooth scroll
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const scrollToTop = () => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
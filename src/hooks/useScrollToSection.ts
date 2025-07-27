import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    // Handle special case for hero section
    const targetId = sectionId === 'hero' ? 'root' : sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  }, []);

  return { scrollToSection };
};
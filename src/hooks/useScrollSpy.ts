import { useState, useEffect, useCallback } from 'react';

interface UseScrollSpyOptions {
  sectionIds: readonly string[];
  offset?: number;
  visibilityThreshold?: number;
}

interface UseScrollSpyReturn {
  activeSection: string;
  isVisible: boolean;
}

export const useScrollSpy = ({
  sectionIds,
  offset = 100,
  visibilityThreshold = 0.5,
}: UseScrollSpyOptions): UseScrollSpyReturn => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    
    // Show navigation after scrolling past hero
    setIsVisible(window.scrollY > window.innerHeight * visibilityThreshold);

    // Find active section
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  }, [sectionIds, offset, visibilityThreshold]);

  useEffect(() => {
    handleScroll(); // Call once to set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { activeSection, isVisible };
};
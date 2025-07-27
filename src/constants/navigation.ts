import type { NavigationItem } from '../types';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: 'hero', label: 'HOME', icon: '🏠' },
  { id: 'about', label: 'ABOUT', icon: '👤' },
  { id: 'skills', label: 'SKILLS', icon: '⚡' },
  { id: 'projects', label: 'PROJECTS', icon: '💼' },
  { id: 'contact', label: 'CONTACT', icon: '📧' },
] as const;
import type { SocialLink } from '../types';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'GitHub', icon: '🐙', url: 'https://github.com/lovrobiljeskovic' },
  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/lovro-biljeskovic-083898129/' },
  { name: 'Twitter', icon: '🐦', url: 'https://x.com/phlexie_' },
  { name: 'Email', icon: '📧', url: 'biljeskovic.lovro@gmail.com' },
] as const;

export const COLLABORATION_INTERESTS = [
  'Frontend Development Projects',
  'Full-Stack Applications',
  'Open Source Contributions',
  'UI/UX Design Collaboration',
  'Technical Writing',
] as const;
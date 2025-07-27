import type { Project, ProjectFilter } from '../types';

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'Conditional Funding Markets',
    description:
      'A futrachy-based conditional funding markets app, enabling enhanced funding models that surpassed traditional methods.',
    tech: ['React', 'TypeScript', 'Vite', 'tailwind', 'ERC4337', 'Web3', 'Performance Optimization'],
    category: 'frontend',
    status: 'live',
    image: '🎯',
    live: 'https://app.butter.markets/',
  },
  {
    id: 2,
    title: 'Rate Hopper Platform',
    description:
      'RateHopper uses AI to automatically find and switch to the lowest borrowing rates across DeFi protocols, saving you time and money.',
    tech: ['React', 'TypeScript', 'Next.js', 'tailwind', 'Web3', 'Performance Optimization'],
    category: 'frontend',
    status: 'live',
    image: '🔄',
    live: 'https://ratehopper.ai/',
  },
  {
    id: 3,
    title: 'Archive Protocol Platform',
    description:
      'A multi-purpose API data infrastructure designed for analyzing historical returns for DeFi positions.',
    tech: ['React', 'TypeScript', 'Next.js', 'tailwind', 'Performance Optimization', 'NodeJS', 'Web3'],
    category: 'fullstack',
    status: 'live',
    image: '🗄️',
    live: 'https://explore.archiveprotocol.com',
  },
  {
    id: 4,
    title: 'APY Vision Platform',
    description:
      'A comprehensive analytics platform for tracking and optimizing DeFi portfolio performance across multiple chains and protocols.',
    tech: ['React', 'TypeScript', 'Next.js', 'Performance Optimization', 'NodeJS', 'Web3'],
    category: 'frontend',
    status: 'sunset',
    image: '📊',
  },
  {
    id: 5,
    title: 'mStable DeFi Platform',
    description:
      'Developed smart contract interfaces and wallet connection features. Improved transaction success rates by 25% and optimized bundle size by 33%.',
    tech: ['React', 'TypesScript', 'Web3', 'Smart Contracts', 'The Graph'],
    category: 'frontend',
    status: 'live',
    image: '⚡',
    github: 'https://github.com/mstable/mStable-app',
    live: 'https://mstable.org/',
  },
  {
    id: 6,
    title: 'Ethereum Studio',
    description:
      'Ethereum Studio is an integrated development environment (IDE) to learn, build and deploy decentralized apps (DApps) for Ethereum. It\'s a full browser experience which requires no installations to run.',
    tech: ['React', 'TypeScript', 'Web3', 'Smart Contracts', 'The Graph'],
    category: 'frontend',
    status: 'sunset',
    image: '🎬',
    github: 'https://github.com/SuperblocksHQ/ethereum-studio',
  },
  {
    id: 7,
    title: 'Smart Contract Monitoring',
    description:
      'Delivered end-to-end feature development for Ethereum Smart Contract monitoring system at Superblocks, with Google OAuth integration.',
    tech: ['React', 'Node.js', 'Ethereum', 'Google OAuth'],
    category: 'fullstack',
    status: 'internal tool',
    image: '🔍',
  },
  {
    id: 8,
    title: 'Enterprise Data Enrichment',
    description:
      'Built crawlers and data enrichment protocols for major clients including ISS, IKEA, Vaekstfonden, and Saxo-Bank at CluedIn ApS.',
    tech: ['Data Processing', 'APIs', 'Crawlers', 'Enterprise'],
    category: 'backend',
    status: 'internal implementation',
    image: '🏢',
  },
] as const;

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  { key: 'all', label: 'ALL PROJECTS' },
  { key: 'frontend', label: 'FRONTEND' },
  { key: 'backend', label: 'BACKEND' },
  { key: 'fullstack', label: 'FULLSTACK' },
  { key: 'tools', label: 'TOOLS' },
] as const;
import type { SkillCategories } from '../types';

export const SKILL_CATEGORIES: SkillCategories = {
  frontend: {
    title: 'FRONTEND ARSENAL',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 92, icon: '🔷' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'Redux', level: 88, icon: '🔄' },
      { name: 'CSS-in-JS', level: 85, icon: '🎨' },
      { name: 'HTML/CSS', level: 90, icon: '📄' },
      { name: 'Webpack', level: 82, icon: '📦' },
    ],
  },
  backend: {
    title: 'BACKEND WEAPONS',
    skills: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'NestJS', level: 85, icon: '🚀' },
      { name: 'GraphQL', level: 88, icon: '📊' },
      { name: 'REST APIs', level: 95, icon: '🔗' },
      { name: 'WebSockets', level: 85, icon: '🔌' },
      { name: 'Ruby on Rails', level: 75, icon: '💎' },
      { name: 'Python', level: 70, icon: '🐍' },
      { name: 'The Graph', level: 85, icon: '📈' },
    ],
  },
  blockchain: {
    title: 'WEB3 ARSENAL',
    skills: [
      { name: 'Web3.js', level: 88, icon: '🌐' },
      { name: 'Ethers.js', level: 90, icon: '⚡' },
      { name: 'Viem/Wagmi', level: 85, icon: '🔮' },
      { name: 'Solidity', level: 80, icon: '⛓️' },
      { name: 'ERC4337', level: 82, icon: '🛡️' },
      { name: 'Smart Contracts', level: 85, icon: '📋' },
      { name: 'DApps', level: 88, icon: '🏗️' },
      { name: 'Subgraphs', level: 90, icon: '📊' },
    ],
  },
  tools: {
    title: 'DEVELOPMENT TOOLS',
    skills: [
      { name: 'Jest', level: 88, icon: '🧪' },
      { name: 'Cypress', level: 82, icon: '🌲' },
      { name: 'Webpack', level: 85, icon: '📦' },
      { name: 'Git', level: 95, icon: '🔀' },
      { name: 'Google APIs', level: 80, icon: '🔍' },
      { name: 'Architecture', level: 90, icon: '🏛️' },
      { name: 'Performance', level: 92, icon: '⚡' },
      { name: 'Code Splitting', level: 88, icon: '✂️' },
    ],
  },
} as const;
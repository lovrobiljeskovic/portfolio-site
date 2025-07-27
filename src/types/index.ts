// Common types used across the application

export interface BaseComponentProps {
  className?: string;
  'data-testid'?: string;
}

// Navigation types
export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
}

// Skills types
export interface Skill {
  readonly name: string;
  readonly level: number;
  readonly icon: string;
}

export interface SkillCategory {
  readonly title: string;
  readonly skills: readonly Skill[];
}

export type SkillCategories = Record<string, SkillCategory>;

// Projects types
export type ProjectStatus = 'live' | 'sunset' | 'internal tool' | 'internal implementation';
export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'tools';

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly tech: readonly string[];
  readonly category: ProjectCategory;
  readonly status: ProjectStatus;
  readonly image: string;
  readonly github?: string;
  readonly live?: string;
}

export interface ProjectFilter {
  readonly key: string;
  readonly label: string;
}

// Contact types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

export interface SocialLink {
  readonly name: string;
  readonly icon: string;
  readonly url: string;
}

// Loading screen types
export interface LoadingState {
  text: string;
  progress: number;
}

// Hero typing animation types
export interface TypingState {
  displayText: string;
  currentPhrase: number;
  isDeleting: boolean;
}

// Environment configuration types
export interface EmailJSConfig {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
}

// Error handling types
export interface ErrorState {
  hasError: boolean;
  message?: string;
}

// Generic event handler types
export type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type FormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
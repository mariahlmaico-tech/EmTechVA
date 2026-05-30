export type AutomationPlatform = 'Zapier' | 'Make.com' | 'n8n' | 'Google Apps Script';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon identifier
  features: string[];
  platforms: string[];
}

export interface FlowStep {
  id: string;
  label: string;
  type: 'trigger' | 'action' | 'ai' | 'filter' | 'router';
  description: string;
}

export interface Project {
  id: string;
  platform: AutomationPlatform;
  title: string;
  shortDescription: string;
  longDescription: string;
  bullets: string[];
  toolsUsed: string[];
  metrics: { label: string; value: string }[];
  flowSteps: FlowStep[];
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  toolsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarSeed: string; // For generating a nice profile color
  feedback: string;
  rating: number;
}

import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  imageUrl: string;
  imageHint: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

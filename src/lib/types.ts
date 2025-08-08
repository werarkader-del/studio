import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  label?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  avatarUrl: string;
  avatarHint: string;
}

export interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  description: string;
}

export interface SubjectProgress {
  subject: string;
  grade: number;
  progress: { month: string; score: number }[];
}

export interface LunchMenuItem {
  id: string;
  name: string;
  description: string;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
  };
}

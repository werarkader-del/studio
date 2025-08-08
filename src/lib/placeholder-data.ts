import type { Announcement, StaffMember, CalendarEvent, SubjectProgress, LunchMenuItem, NavItem } from './types';
import { LayoutDashboard, Users, BookOpenCheck, Utensils, Bot } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { title: 'Staff Directory', href: '/staff', icon: Users },
  { title: 'Progress Reports', href: '/progress', icon: BookOpenCheck },
  { title: 'Lunch Menu', href: '/lunch-menu', icon: Utensils },
  { title: 'AI-Powered FAQ', href: '/faq', icon: Bot },
];

export const announcements: Announcement[] = [
  { id: '1', title: 'Parent-Teacher Conferences', content: 'Parent-teacher conferences will be held next week on October 25th and 26th. Please sign up for a slot.', date: '2023-10-18' },
  { id: '2', title: 'School Picture Day', content: 'Smile! School picture day is scheduled for November 3rd. Order forms will be sent home soon.', date: '2023-10-15' },
  { id: '3', title: 'Fall Festival Canceled', content: 'Due to expected inclement weather, the Fall Festival has been canceled. We hope to reschedule soon.', date: '2023-10-12' },
];

export const staff: StaffMember[] = [
  { id: '1', name: 'Dr. Evelyn Reed', title: 'Principal', email: 'e.reed@campusflow.edu', phone: '555-0101', avatarUrl: 'https://placehold.co/100x100.png', avatarHint: 'woman principal' },
  { id: '2', name: 'Mr. David Chen', title: 'Vice Principal', email: 'd.chen@campusflow.edu', phone: '555-0102', avatarUrl: 'https://placehold.co/100x100.png', avatarHint: 'man vice principal' },
  { id: '3', name: 'Ms. Maria Garcia', title: 'Science Department Head', email: 'm.garcia@campusflow.edu', phone: '555-0103', avatarUrl: 'https://placehold.co/100x100.png', avatarHint: 'woman teacher' },
  { id: '4', name: 'Mr. Samuel Jones', title: 'Mathematics Teacher', email: 's.jones@campusflow.edu', phone: '555-0104', avatarUrl: 'https://placehold.co/100x100.png', avatarHint: 'man teacher' },
  { id: '5', name: 'Ms. Linda Kim', title: 'English Teacher', email: 'l.kim@campusflow.edu', phone: '555-0105', avatarUrl: 'https://placehold.co/100x100.png', avatarHint: 'female teacher' },
  { id: '6', name: 'Mr. Robert Brown', title: 'History Teacher', email: 'r.brown@campusflow.edu', phone: '555-0106', avatarUrl: 'https://placehold.co/100x100.png', avatarHint: 'male teacher' },
];

export const calendarEvents: CalendarEvent[] = [
    { id: '1', date: new Date(new Date().setDate(new Date().getDate() + 2)), title: 'Staff Meeting', description: 'All staff meeting in the main hall.' },
    { id: '2', date: new Date(new Date().setDate(new Date().getDate() + 5)), title: 'Mid-term Exams Begin', description: 'Mid-term exams for all grades start today.' },
    { id: '3', date: new Date(new Date().setDate(new Date().getDate() + 10)), title: 'Book Fair', description: 'Annual book fair in the library.' },
];

export const progressReports: SubjectProgress[] = [
  { subject: 'Mathematics', grade: 88, progress: [ { month: 'Jan', score: 75 }, { month: 'Feb', score: 80 }, { month: 'Mar', score: 82 }, { month: 'Apr', score: 88 } ] },
  { subject: 'Science', grade: 92, progress: [ { month: 'Jan', score: 85 }, { month: 'Feb', score: 88 }, { month: 'Mar', score: 90 }, { month: 'Apr', score: 92 } ] },
  { subject: 'English', grade: 85, progress: [ { month: 'Jan', score: 80 }, { month: 'Feb', score: 82 }, { month: 'Mar', score: 88 }, { month: 'Apr', score: 85 } ] },
  { subject: 'History', grade: 90, progress: [ { month: 'Jan', score: 88 }, { month: 'Feb', score: 90 }, { month: 'Mar', score: 89 }, { month: 'Apr', score: 90 } ] },
];

export const lunchMenu: { [day: string]: LunchMenuItem[] } = {
  Monday: [
    { id: 'm1', name: 'Spaghetti and Meatballs', description: 'Classic spaghetti with homemade meatballs.', nutrition: { calories: 450, protein: '25g', carbs: '50g' } },
    { id: 'm2', name: 'Garden Salad', description: 'Fresh mixed greens with a variety of vegetables.', nutrition: { calories: 150, protein: '5g', carbs: '10g' } },
  ],
  Tuesday: [
    { id: 't1', name: 'Chicken Tacos', description: 'Soft tacos with grilled chicken and toppings.', nutrition: { calories: 380, protein: '30g', carbs: '35g' } },
    { id: 't2', name: 'Bean Burrito', description: 'Vegetarian bean and cheese burrito.', nutrition: { calories: 420, protein: '20g', carbs: '55g' } },
  ],
  Wednesday: [
    { id: 'w1', name: 'Cheeseburger', description: 'All-beef patty on a whole wheat bun.', nutrition: { calories: 500, protein: '35g', carbs: '40g' } },
    { id: 'w2', name: 'Veggie Burger', description: 'Plant-based patty on a whole wheat bun.', nutrition: { calories: 400, protein: '22g', carbs: '45g' } },
  ],
  Thursday: [
    { id: 'th1', name: 'Pizza Day', description: 'Cheese or pepperoni pizza slices.', nutrition: { calories: 350, protein: '18g', carbs: '40g' } },
    { id: 'th2', name: 'Caesar Salad', description: 'Romaine lettuce with Caesar dressing and croutons.', nutrition: { calories: 200, protein: '8g', carbs: '15g' } },
  ],
  Friday: [
    { id: 'f1', name: 'Fish and Chips', description: 'Battered fish with a side of potato wedges.', nutrition: { calories: 550, protein: '30g', carbs: '60g' } },
    { id: 'f2', name: 'Macaroni and Cheese', description: 'Creamy baked macaroni and cheese.', nutrition: { calories: 480, protein: '20g', carbs: '65g' } },
  ],
};

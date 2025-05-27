import { LayoutDashboard, ClipboardList, Calendar, Building2, BarChart2, FlaskConical,  MessageSquare, Headphones, Settings } from 'lucide-react';

export const navigationLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, active: true },
  { id: 'history', label: 'History', icon: ClipboardList, active: false },
  { id: 'calendar', label: 'Calendar', icon: Calendar, active: false },
  { id: 'appointments', label: 'Appointments', icon: Building2, active: false },
  { id: 'statistics', label: 'Statistics', icon: BarChart2, active: false },
  { id: 'tests', label: 'Tests', icon: FlaskConical, active: false },
  { id: 'chat', label: 'Chat', icon: MessageSquare, active: false },
  { id: 'support', label: 'Support', icon: Headphones, active: false },
  { id: 'settings', label: 'Settings', icon: Settings, active: false },
];
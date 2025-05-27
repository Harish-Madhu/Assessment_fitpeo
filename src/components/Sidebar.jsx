import React from 'react';
import { navigationLinks } from '../data/navigationData';
import { MessageSquare, Headphones, Settings } from 'lucide-react';

const toolsLinks = [
  { id: 'chat', label: 'Chat', icon: MessageSquare, active: false },
  { id: 'support', label: 'Support', icon: Headphones, active: false },
  { id: 'setting', label: 'Setting', icon: Settings, active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-60 bg-indigo-100 shadow-lg shadow-gray-300 border-r border-gray-200 h-screen fixed left-0 top-0 z-10">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-teal-500 tracking-tight mb-8">Health<span className="text-gray-700">care.</span></h1>
        
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">General</h2>
        <nav className="space-y-1 mb-8">
          {navigationLinks.slice(0, 5).map((link) => (
            <a
              key={link.id}
              href="#"
              className={`sidebar-link group ${link.active ? 'active' : ''}`}
            >
              <span className="mr-3 text-lg">
                {React.createElement(link.icon, { size: 20 })}
              </span>
              <span className="font-medium text-sm">{link.label}</span>
            </a>
          ))}
        </nav>

        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Tools</h2>
        <nav className="space-y-1">
          {toolsLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className={`sidebar-link group ${link.active ? 'active' : ''}`}
            >
              <span className="mr-3 text-lg">
                {React.createElement(link.icon, { size: 20 })}
              </span>
              <span className="font-medium text-sm">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
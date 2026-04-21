import * as icons from 'lucide-react';

const iconMap = {};
Object.entries(icons).forEach(([name, component]) => {
  if (typeof component === 'function' || (typeof component === 'object' && component !== null)) {
    iconMap[name] = component;
  }
});

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 2 }) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} strokeWidth={strokeWidth} />;
}

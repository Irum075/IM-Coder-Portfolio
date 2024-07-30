import * as LucideIcons from 'lucide-react';

const Icon = ({ name, color = 'black', size = 24 }) => {
  // Check if the icon exists in the imported icons
  const LucideIcon = LucideIcons[name];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" does not exist in LucideIcons.`);
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;

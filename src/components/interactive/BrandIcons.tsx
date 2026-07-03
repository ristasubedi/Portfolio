// src/components/interactive/BrandIcons.tsx
import React from 'react';
import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

type BrandIconData = Pick<SimpleIcon, 'title' | 'path' | 'hex'>;

const fallbackIcons: Record<string, BrandIconData> = {
  siLinkedin: {
    title: 'LinkedIn',
    hex: '0A66C2',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
};

interface BrandIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: string; // e.g., 'siLinkedin', 'siGithub', 'siPython'
  size?: number;
  color?: string;
}

export default function BrandIcon({ name, size = 20, color, className = '', ...props }: BrandIconProps) {
  // Safe lookup against the simple-icons bundle matrix
  const icon = (icons as Record<string, BrandIconData | undefined>)[name] ?? fallbackIcons[name];

  if (!icon) {
    console.warn(`SimpleIcon: '${name}' not found in registry matrix.`);
    return null;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || `#${icon.hex}`} // Defaults cleanly to the official brand guidelines color hex!
      className={`transition-opacity hover:opacity-80 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

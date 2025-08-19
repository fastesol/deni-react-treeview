// Import all theme styles so they're available at build time
import './base-theme.scss';
import './classic-theme.scss';
import './green-theme.scss';
import './icons-theme.scss';
import './metro-theme.scss';
import './moonlight-theme.scss';
import './orange-theme.scss';
import './purple-theme.scss';
import './red-theme.scss';
import './silver-theme.scss';

// Export theme names for reference
export const availableThemes = [
  'classic',
  'green',
  'metro',
  'moonlight',
  'orange',
  'purple',
  'red',
  'silver'
] as const;

export type ThemeName = typeof availableThemes[number]; 
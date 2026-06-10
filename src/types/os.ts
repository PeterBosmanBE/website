export type AppId = 'about' | 'skills' | 'experiences' | 'education' | 'projects' | 'music' | 'image';

export interface WindowState {
  id: AppId;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface AppConfig {
  id: AppId;
  name: string;
  icon: React.ReactNode;
}

"use client";

import { useDesktop } from "./desktop-context";
import type { AppId } from "@/src/types/os";
import { cn } from "@/src/lib/utils";
import {
  User,
  Wrench,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Music,
} from "lucide-react";

const desktopIcons: { id: AppId; name: string; icon: React.ReactNode }[] = [
  { id: "about", name: "About Me", icon: <User className="w-8 h-8" /> },
  { id: "skills", name: "Skills", icon: <Wrench className="w-8 h-8" /> },
  { id: "experiences", name: "Experiences", icon: <Briefcase className="w-8 h-8" /> },
  { id: "education", name: "Education", icon: <GraduationCap className="w-8 h-8" /> },
  { id: "projects", name: "Projects", icon: <FolderOpen className="w-8 h-8" /> },
  { id: "music", name: "Music Player", icon: <Music className="w-8 h-8" /> },
];

export function DesktopIcons() {
  const { openWindow, windows } = useDesktop();

  return (
    <div className="absolute top-4 left-4 grid gap-2" style={{ gridTemplateRows: "repeat(auto-fill, 90px)" }}>
      {desktopIcons.map((app) => {
        const isOpen = windows.some((w) => w.id === app.id && w.isOpen && !w.isMinimized);
        
        return (
          <button
            key={app.id}
            onDoubleClick={() => openWindow(app.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-3 rounded-lg w-20",
              "transition-all duration-150 select-none",
              "hover:bg-[var(--icon-hover)]",
              "focus:bg-[var(--icon-hover)] focus:outline-none",
              isOpen && "bg-[var(--icon-hover)]"
            )}
          >
            <div className="text-primary drop-shadow-lg">{app.icon}</div>
            <span className="text-xs text-center text-foreground/90 leading-tight drop-shadow-md">
              {app.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

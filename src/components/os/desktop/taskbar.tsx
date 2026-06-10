"use client";

import { useState, useEffect } from "react";
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

const apps: { id: AppId; name: string; icon: React.ReactNode }[] = [
  { id: "about", name: "About", icon: <User className="w-5 h-5" /> },
  { id: "skills", name: "Skills", icon: <Wrench className="w-5 h-5" /> },
  { id: "experiences", name: "Experiences", icon: <Briefcase className="w-5 h-5" /> },
  { id: "education", name: "Education", icon: <GraduationCap className="w-5 h-5" /> },
  { id: "projects", name: "Projects", icon: <FolderOpen className="w-5 h-5" /> },
  { id: "music", name: "Music", icon: <Music className="w-5 h-5" /> },
];

export function Taskbar() {
  const { windows, openWindow, focusWindow, activeWindow } = useDesktop();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindows = windows.filter((w) => w.isOpen);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-2 backdrop-blur-md border-t border-border/30"
      style={{ backgroundColor: "var(--taskbar-bg)", zIndex: 9999 }}
    >
      {/* Start Menu / App Launcher */}
      <div className="flex items-center gap-1">
        <button className="p-2 rounded hover:bg-secondary/60 transition-colors">
          <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
            <div className="bg-primary rounded-sm" />
            <div className="bg-primary rounded-sm" />
            <div className="bg-primary rounded-sm" />
            <div className="bg-primary rounded-sm" />
          </div>
          {""}
        </button>
        <div className="w-px h-6 bg-border/50 mx-1" />
      </div>

      {/* Open Windows */}
      <div className="flex-1 flex items-center gap-1 overflow-x-auto px-2">
        {openWindows.map((window) => {
          const app = apps.find((a) => a.id === window.id);
          if (!app) return null;
          
          const isActive = activeWindow === window.id && !window.isMinimized;
          
          return (
            <button
              key={window.id}
              onClick={() => focusWindow(window.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded transition-all",
                "hover:bg-secondary/60",
                isActive
                  ? "bg-secondary/80 border-b-2 border-primary"
                  : window.isMinimized
                  ? "opacity-60"
                  : "bg-secondary/40"
              )}
            >
              <span className="text-primary">{app.icon}</span>
              <span className="text-sm text-foreground/80 hidden sm:inline">{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-3 px-3">
        <div className="text-xs text-muted-foreground hidden sm:block">
          {time.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </div>
        <div className="text-sm font-mono text-foreground/90">
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}

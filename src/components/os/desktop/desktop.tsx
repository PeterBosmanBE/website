"use client";

import { DesktopProvider } from "./desktop-context";
import { DesktopIcons } from "./desktop-icons";
import { Taskbar } from "./taskbar";
import { AboutWindow } from "@/src/components/apps/desktop/about-window";
import { SkillsWindow } from "@/src/components/apps/desktop/skills-window";
import { ExperiencesWindow } from "@/src/components/apps/desktop/experiences-window";
import { EducationWindow } from "@/src/components/apps/desktop/education-window";
import { ProjectsWindow } from "@/src/components/apps/desktop/projects-window";
import { MusicWindow } from "@/src/components/apps/desktop/music-window";
import { ImageWindow } from "@/src/components/apps/desktop/image-window";
import { useImageStore } from "@/src/lib/image-store";

export function Desktop() {
  const { imageUrl } = useImageStore();
  return (
    <DesktopProvider>
      <div
        className="h-screen w-screen overflow-hidden relative"
        style={{ backgroundColor: "var(--desktop-bg)" }}
      >
        {/* Desktop Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, var(--foreground) 2%, transparent 0%)`,
            backgroundSize: "50px 50px"
          }}
        />

        {/* Desktop Icons */}
        <DesktopIcons />

        {/* Windows */}
        <ImageWindow />
        <AboutWindow />
        <SkillsWindow />
        <ExperiencesWindow />
        <EducationWindow />
        <ProjectsWindow />
        <MusicWindow />

        {/* Taskbar */}
        <Taskbar />
      </div>
    </DesktopProvider>
  );
}

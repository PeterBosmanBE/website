"use client";

import { Window } from "../../os/desktop/window";
import { FolderOpen, ExternalLink, Star, ImageIcon } from "lucide-react";
import { projects } from "@/src/lib/data";
import { useDesktop } from "../../os/desktop/desktop-context";
import { useImageStore } from "@/src/lib/image-store";

export function ProjectsWindow() {
  const { openWindow } = useDesktop();
  const { setImage } = useImageStore();

  function handleShowImage(url: string, title: string) {
    setImage(url, title);
    openWindow("image");
  }
  
  return (
    <Window id="projects" title="Projects" icon={<FolderOpen className="w-4 h-4" />}>
      <div className="p-4 grid gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
            </div>

            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
              {project.description}
            </p>

            <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
              {project.startDate} - {project.endDate}
            </p>

            <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
              Associated with {project.associated}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-primary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-3">
              {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                Open Code
              </a>
              )}
              {project.image && (
                <button
                  onClick={() => {
                    console.log(project.title, project.image);
                    handleShowImage(project.image!, project.title);
                  }}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  Show Image
                </button>
              )}
              {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                Show Video
              </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

"use client"

import { ScrollArea } from "@/src/components/ui/scroll-area"
import { useImageStore } from "@/src/lib/image-store"
import { ExternalLink, ImageIcon, Clapperboard } from "lucide-react"
import { projects } from "@/src/lib/data"
import { Icons } from "../../icons"

export function ProjectsApp() {
  const { setImage, onOpenImageApp } = useImageStore()

  const handleShowImage = (url: string, title: string) => {
    setImage(url, title)
    onOpenImageApp?.()
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4 pb-8 max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Things I&apos;ve built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden">
              {/* Project Header */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-foreground font-semibold text-lg">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                        <Icons.github className="w-4 h-4 text-muted-foreground" />
                        {""}
                      </a>
                    )}
                    {project.image && (
                      <button
                        onClick={() => {handleShowImage(project.image!, project.title)}}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ImageIcon className="w-4 h-4" />
                        {""}
                      </button>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Clapperboard className="w-4 h-4" />
                        {""}
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        {""}
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded-lg text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

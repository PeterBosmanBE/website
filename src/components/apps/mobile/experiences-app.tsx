"use client"

import { ScrollArea } from "@/src/components/ui/scroll-area"
import { Building2, Calendar, LocateIcon, MapPin, Pin } from "lucide-react"
import { experiences } from "@/src/lib/data"

export function ExperiencesApp() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 pb-8 max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Experience</h1>
          <p className="text-muted-foreground text-sm mt-1">
            My professional journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border" />

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline Dot */}
                <div className="absolute left-2.5 top-5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="bg-card rounded-2xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-foreground font-semibold">{exp.roles[0].title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Building2 className="w-4 h-4" />
                    <span><a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.organization}</a> • {exp.roles[0].employment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.roles[0].location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.roles[0].startDate} - {exp.roles[0].endDate}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.roles[0].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.roles[0].technologies.map((tech) => (
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
      </div>
    </ScrollArea>
  )
}

"use client";

import { Window } from "../../os/desktop/window";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/src/lib/data";

export function ExperiencesWindow() {
  return (
    <Window id="experiences" title="Experiences" icon={<Briefcase className="w-4 h-4" />}>
      <div className="p-5 space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-4 pb-4 border-l-2 border-border last:border-l-transparent last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card" />

            <div className="space-y-2">
              <div>
                <h3 className="font-semibold text-foreground">{exp.roles[0].title}</h3>
                <p className="font-medium">
                  <a className="text-primary hover:underline" href={exp.url} target="_blank" rel="noopener noreferrer">
                    {exp.organization}
                  </a> • {exp.roles[0].employment}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.roles[0].startDate} - {exp.roles[0].endDate}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.roles[0].location}
                </span>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                {exp.roles[0].description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.roles[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

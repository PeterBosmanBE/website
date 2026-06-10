"use client";

import { Window } from "../../os/desktop/window";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { educations, usedCertifications as certifications } from "@/src/lib/data";

export function EducationWindow() {
  return (
    <Window id="education" title="Education" icon={<GraduationCap className="w-4 h-4" />}>
      <div className="p-5 space-y-6">
        {/* Degrees */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Education
          </h2>
          {educations.map((edu, index) => (
            <div key={index} className="space-y-2 p-3 rounded-lg bg-secondary/30">
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary">{edu.organization} • {edu.typeOfDegree}</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {edu.startDate} - {edu.endDate}
              </div>
              <p className="text-sm text-foreground/70">{edu.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-primary/20 text-primary"
                  >
                    <Award className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Certifications
          </h2>
          <div className="grid gap-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded bg-secondary/30"
              >
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <div>
                    <p className="text-sm font-medium text-foreground">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

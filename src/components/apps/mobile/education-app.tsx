"use client"

import { ScrollArea } from "@/src/components/ui/scroll-area"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { educations, usedCertifications as certifications } from "@/src/lib/data";

export function EducationApp() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 pb-8 max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Education</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Academic background & certifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-4 mb-6">
          {educations.map((edu, index) => (
            <div key={index} className="bg-card rounded-2xl p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-rose-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.organization} • {edu.typeOfDegree}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {edu.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-rose-500/10 rounded-lg text-xs text-rose-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 p-4 pb-2">
            <Award className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Certifications
            </h2>
          </div>
          <div className="divide-y divide-border">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                </div>
                <div className="flex-1">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <p className="text-foreground text-sm font-medium">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.company} • {cert.date}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

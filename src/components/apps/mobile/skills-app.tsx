"use client"

import { ScrollArea } from "@/src/components/ui/scroll-area"
import { usedSkills as skills } from "@/src/lib/data"
import Image from "next/image"

export function SkillsApp() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 pb-8 max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Skills</h1>
          <p className="text-muted-foreground text-sm mt-1">Technologies I work with</p>
        </div>

        {/* Categories */}
        <div className="space-y-5">
          {skills.map((cat) => (
            <div key={cat.name} className="bg-card rounded-2xl p-4">
              <h2 className={`text-xs font-semibold uppercase tracking-widest mb-3`}>
                {cat.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium text-foreground`}
                  >
                    <span className="text-base leading-none">
                      <Image src={skill.icon} alt={skill.name.charAt(0)} width={16} height={16} />
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

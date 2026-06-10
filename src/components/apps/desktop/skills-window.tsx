"use client";

import { Window } from "../../os/desktop/window";
import { Wrench } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { usedSkills } from "@/src/lib/data";

type Skill = {
  icon: string;
  name: string;
  description: string;
};

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span title={skill.description} className="group">
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200",
          "hover:scale-105 hover:shadow-lg cursor-default"
        )}
      >
        <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
        <span className="text-sm font-medium">{skill.name}</span>
      </div>
    </span>
  );
}

export function SkillsWindow() {
  return (
    <Window id="skills" title="Skills" icon={<Wrench className="w-4 h-4" />}>
      <div className="p-5 space-y-6">
        {usedSkills.map((category) => {
          return (
            <div key={category.name} className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {category.name}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
}

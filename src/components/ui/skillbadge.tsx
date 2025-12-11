import { Skills } from "../../data/skills";

type SkillName = keyof typeof Skills;

type SkillType = {
  skillName: SkillName;
};

export default function SkillBadge({ skillName }: SkillType) {
  const skill = Skills[skillName];

  return (
    <div className="flex items-center gap-2">
      <a href={skill?.link}>
        <div className="flex items-center outline rounded-md p-2 pr-2 gap-1 gap-2 transform">
          <div className="w-6 h-6 flex-shrink-0">{skill?.icon()}</div>
          <div className="text-[20px] leading-[25px]">{skill?.title}</div>
        </div>
      </a>
    </div>
  );
}

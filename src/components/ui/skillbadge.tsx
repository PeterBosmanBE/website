import { Skills } from "../../data/skills";

type SkillName = keyof typeof Skills;

type SkillType = {
  skillName: SkillName;
  customName?: string;
  customURL?: string;
};

export default function SkillBadge({ skillName, customName, customURL }: SkillType) {
  const skill = Skills[skillName];

  const skillTitle = customName ? customName : skill.title;
  const skillURL = customURL ? customURL : skill.link;

  return (
    <div className="flex items-center gap-2">
      <a href={skillURL}>
        <div className="flex items-center outline rounded-md p-2 pr-2 gap-1 gap-2 transform">
          <div className="w-6 h-6 flex-shrink-0">{skill?.icon()}</div>
          <div className="text-[20px] leading-[25px]">{skillTitle}</div>
        </div>
      </a>
    </div>
  );
}

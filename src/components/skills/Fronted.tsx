import { Icon } from "@iconify/react";

const skills = [
  { name: "HTML", level: "Basic" },
  { name: "Sass", level: "Intermediate" },
  { name: "Tailwind", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
];

export default function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.slice(0, 3).map((skill, index) => (
            <div className="skills__data" key={index}>
              <Icon icon="bx:badge-check" />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {skills.slice(3).map((skill, index) => (
            <div className="skills__data" key={index}>
              <Icon icon="bx:badge-check" />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

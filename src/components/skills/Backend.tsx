import { Icon } from "@iconify/react";

const skills = [
  { name: "REST", level: "Intermediate" },
  { name: "Python", level: "Basic" },
  { name: "Docker", level: "Basic" },
  { name: "Mongoose", level: "Intermediate" },
  { name: "Sequelize", level: "Intermediate" },
  { name: "Firebase", level: "Basic" },
];

export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

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

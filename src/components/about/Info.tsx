import { Icon } from "@iconify/react";

const currentYear = new Date().getFullYear();
const startYear = 2024;
const experienceYears = currentYear - startYear;

const infoItems = [
  {
    icon: "bx:award",
    title: "Experience",
    subtitle: `About ${experienceYears} year${
      experienceYears !== 1 ? "s" : ""
    }`,
  },
  {
    icon: "bx:briefcase-alt",
    title: "Completed",
    subtitle: "4+ Projects",
  },
  {
    icon: "bx:support",
    title: "Support",
    subtitle: (
      <>
        Weekdays:
        <br />
        9AM - 9PM
        <br />
        (Kyiv timezone)
      </>
    ),
  },
];

export default function Info() {
  return (
    <div className="about__info grid">
      {infoItems.map((item, index) => (
        <div className="about__box" key={index}>
          <Icon icon={item.icon} className="about__icon" />
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}

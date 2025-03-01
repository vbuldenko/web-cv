import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import "./qualification.css";

interface QualificationData {
  title: string;
  subtitle: string;
  calendar: string;
}

const educationData: QualificationData[] = [
  {
    title: "Full-stack development",
    subtitle: "Mate academy. Full-stack developer course",
    calendar: "02.2024 - 2025",
  },
  {
    title: "Fullstack Web Development",
    subtitle: "Zero To Mastery Academy. Fullstack Web Developer Career Path",
    calendar: "10.2022 - 01.2023",
  },
  {
    title: "Frontend Development",
    subtitle: "Scrimba. The Frontend Developer Career Path",
    calendar: "06.2022 - 09.2022",
  },
  {
    title: "CS50",
    subtitle: "CS50's Introduction to Computer Science",
    calendar: "01.2022 - 05.2022",
  },
  {
    title: "PHD in Bioorganic Chemistry",
    subtitle:
      "Ukraine - Institute of Bioorganic Chemistry and Petrochemistry of National Academy of Sciences of Ukraine",
    calendar: "2015 - 2019",
  },
  {
    title: "Biologist. Chemist",
    subtitle: "Ukraine - Nizhyn State Gogol University",
    calendar: "2009 - 2015",
  },
];

const experienceData: QualificationData[] = [
  {
    title: "Freelancer",
    subtitle: "- Ukraine -",
    calendar: "06.2024 - Present",
  },
  {
    title: "Researcher",
    subtitle:
      "Ukraine - Institute of Bioorganic Chemistry and Petrochemistry of National Academy of Sciences of Ukraine",
    calendar: "2019 - 2022",
  },
  {
    title: "PHD Student",
    subtitle:
      "Ukraine - Institute of Bioorganic Chemistry and Petrochemistry of National Academy of Sciences of Ukraine",
    calendar: "2015 - 2019",
  },
];

interface QualificationSectionProps {
  data: QualificationData[];
}

function QualificationSection({ data }: QualificationSectionProps) {
  return (
    <>
      {data.map((item, index) => (
        <div className="qualification__data" key={item.title + index}>
          {index % 2 === 0 && (
            <>
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </>
          )}

          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <Icon icon="uil:calendar-alt" />
              {item.calendar}
            </div>
          </div>

          {index % 2 !== 0 && (
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default function Qualification() {
  const [toggleState, setToggleState] = useState<number>(1);

  function toggleTab(index: number) {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={clsx("qualification__button button--flex", {
              qualification__active: toggleState === 1,
            })}
          >
            <Icon icon="uil:graduation-cap" className="qualification__icon" />
            Education
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={clsx("qualification__button button--flex", {
              qualification__active: toggleState === 2,
            })}
          >
            <Icon icon="uil:briefcase-alt" className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={clsx("qualification__content", {
              "qualification__content-active": toggleState === 1,
            })}
          >
            <QualificationSection data={educationData} />
          </div>

          <div
            className={clsx("qualification__content", {
              "qualification__content-active": toggleState === 2,
            })}
          >
            <QualificationSection data={experienceData} />
          </div>
        </div>
      </div>
    </section>
  );
}

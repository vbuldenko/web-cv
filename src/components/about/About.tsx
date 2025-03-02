import { Icon } from "@iconify/react";
import Info from "./Info.js";
import "./about.css";

import vb1Image from "../../../public/images/vb1.jpg";
import CV from "../../../public/files/CV.Vladyslav Buldenko_Fullstack.pdf";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={vb1Image} alt="about image" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend and fullstack developer with around 1 year of experience. I
            have a strong grasp of JavaScript, TypeScript, React, Redux, and
            Express. I am also skilled in working with both relational and
            non-relational databases, including PostgreSQL and MongoDB, using
            ORMs like Sequelize and Mongoose. Additionally, I have a solid
            foundation in HTML, CSS, and preprocessors. I am enthusiastic about
            growing in the web development field and am currently seeking
            opportunities to further develop my skills and expand my knowledge.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <Icon icon="uil:import" />
          </a>
        </div>
      </div>
    </section>
  );
}

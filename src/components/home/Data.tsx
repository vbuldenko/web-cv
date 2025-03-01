import { Icon } from "@iconify/react";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">Vladyslav Buldenko</h1>
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
        I am a JavaScript developer based in Kyiv, passionate about creating
        amazing web experiences. I love what I do and am dedicated to delivering
        high-quality work.
      </p>

      <a href="#contact" className="button button--flex">
        <span>Say hello!</span>
        <Icon icon="uil:message" />
      </a>
    </div>
  );
}

import { Icon } from "@iconify/react";

export default function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button">
        <Icon icon="uil:mouse-alt" />
        <span className="home__scroll-name">Scroll Down</span>
        <Icon icon="uil:arrow-down" className="home__scroll-arrow" />
      </a>
    </div>
  );
}

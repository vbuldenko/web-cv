import "./portfolio.css";

const projects = [
  {
    title: "Kickstarter – landing page",
    demoLink: "https://vbuldenko.github.io/Kickstarter/",
    codeLink: "https://github.com/vbuldenko/landing-kickstarter",
    imgSrc: "/images/kickstarter.png", // Replace with actual image path
  },
  {
    title: "2048 Game – Sliding puzzle game",
    demoLink: "https://vbuldenko.github.io/js_2048_game/",
    codeLink: "https://github.com/vbuldenko/2048-js-game",
    imgSrc: "/images/2048.png", // Replace with actual image path
  },
  {
    title: "Nice gadgets – Apple devices ecommerce SPA",
    demoLink: "https://vbuldenko.github.io/react_phone-catalog/",
    codeLink: "https://github.com/vbuldenko/Phone-catalog",
    imgSrc: "/images/gadgets.png", // Replace with actual image path
  },
  {
    title: "Intensity – Full stack fitness studio app",
    demoLink: "https://intensity-studio.onrender.com/",
    codeLink: "https://github.com/vbuldenko/Intensity-app",
    imgSrc: "/images/ifs.png", // Replace with actual image path
  },
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">List of my projects</span>

      <div className="portfolio__container container grid">
        {projects.map((project, index) => (
          <div className="portfolio__content" key={index}>
            <div>
              <img
                src={project.imgSrc}
                alt={project.title}
                className="portfolio__img"
              />
              <h3 className="services__title">{project.title}</h3>
            </div>

            <div className="portfolio__links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="services__button"
              >
                View Demo
                <i className="uil uil-arrow-right services__button-icon"></i>
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="services__button"
              >
                View Code
                <i className="uil uil-arrow-right services__button-icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

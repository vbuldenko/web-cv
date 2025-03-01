import { useState } from "react";
import { Icon } from "@iconify/react";
import "./services.css";

interface Service {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: "uil:web-grid",
    title: "Web Application Development",
    description: "Providing quality web applications to clients and companies.",
    details: [
      "Developing responsive and dynamic web applications.",
      "Using modern JavaScript libraries and frameworks like React and Next.js.",
      "Ensuring cross-browser compatibility and performance optimization.",
      "Implementing best practices for security and scalability.",
      "Continuous integration and deployment.",
    ],
  },
  {
    icon: "uil:server-network",
    title: "API Development and Integration",
    description: "Providing robust API development and integration services.",
    details: [
      "Designing and developing RESTful APIs.",
      "Integrating third-party APIs and services.",
      "Ensuring secure and efficient data exchange.",
      "Implementing authentication and authorization.",
      "API documentation and testing.",
    ],
  },
  {
    icon: "uil:database",
    title: "Database Design and Management",
    description:
      "Providing comprehensive database design and management services.",
    details: [
      "Designing relational and non-relational databases.",
      "Implementing data backup and recovery solutions.",
      "Ensuring data integrity and security.",
    ],
  },
];

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  return (
    <div
      className={isOpen ? "services__modal active-modal" : "services__modal"}
    >
      <div className="services__modal-content">
        <Icon
          icon="uil:times"
          className="services__modal-close"
          onClick={onClose}
        />
        <h3 className="services__modal-title">{service.title}</h3>
        <p className="services__modal-description">{service.description}</p>
        <ul className="services__modal-services grid">
          {service.details.map((detail, index) => (
            <li className="services__modal-service" key={index}>
              <Icon icon="uil:check-circle" className="services__modal-icon" />
              <p className="services__modal-info">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const toggleModal = (index: number | null) => {
    setActiveModal(index === activeModal ? null : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <Icon icon={service.icon} className="services__icon" />
              <h3 className="services__title">
                {service.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => toggleModal(index)}
            >
              View More
              <Icon icon="uil:arrow-right" className="services__button-icon" />
            </span>

            <ServiceModal
              service={service}
              isOpen={activeModal === index}
              onClose={() => toggleModal(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

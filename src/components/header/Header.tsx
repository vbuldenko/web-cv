import { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import "./header.css";
import Dropdown from "./dropdown/Dropdown.tsx";
import ModeToggler from "./mode/ModeToggler.tsx";

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#home", icon: "uil:estate", label: "Home" },
  { href: "#about", icon: "uil:user", label: "About" },
  { href: "#skills", icon: "uil:file-alt", label: "Skills" },
  { href: "#portfolio", icon: "uil:scenery", label: "Portfolio" },
  { href: "#contact", icon: "uil:message", label: "Contact" },
];

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleScroll = useCallback(() => {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) {
      header?.classList.add("scroll-header");
    } else {
      header?.classList.remove("scroll-header");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          VMB
        </a>
        <div className={clsx("nav__menu", { "show-menu": toggle })}>
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.href}>
                <a
                  href={item.href}
                  className={clsx("nav__link", {
                    "active-link": activeNav === item.href,
                  })}
                  onClick={() => setActiveNav(item.href)}
                >
                  <Icon
                    className="nav__icon"
                    icon={item.icon}
                    onClick={() => setToggle((prev) => !prev)}
                  />

                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Icon
            className="nav__close"
            icon="uil:times"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <div className="nav nav__settings">
          <Dropdown />
          <ModeToggler />
        </div>

        <div className="nav__toggle" onClick={() => setToggle((prev) => !prev)}>
          <Icon icon="uil:apps" />
        </div>
      </nav>
    </header>
  );
}

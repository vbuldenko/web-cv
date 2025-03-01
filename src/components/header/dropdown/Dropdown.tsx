import { useState } from "react";
import "./dropdown.css";

export default function Dropdown() {
  const [langDrop, setLangDrop] = useState({
    open: false,
    language: "ENG",
  });
  const { open, language } = langDrop;
  const chosenLang = language === "ENG" ? "UA" : "ENG";
  return (
    <div className="nav__dropdown">
      <button
        className={
          open ? "nav__dropdown-button active" : "nav__dropdown-button"
        }
        onClick={() => setLangDrop((prev) => ({ ...prev, open: !prev.open }))}
      >
        <span>{language}</span>
        <div
          className={open ? "nav__dropdown-icon active" : "nav__dropdown-icon"}
        >
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        className={
          open ? "nav__dropdown-content active" : "nav__dropdown-content"
        }
      >
        <div
          className="nav__dropdown-item"
          onClick={() =>
            setLangDrop((prev) => ({ open: !prev.open, language: chosenLang }))
          }
        >
          {chosenLang}
        </div>
      </div>
    </div>
  );
}

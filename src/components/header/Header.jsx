import { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  /*----Toggle Menu ----*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [darkMode, setDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assuming 768px as breakpoint for desktop

  const handleToggleMenu = () => {
    showMenu(!Toggle);
    const navLogo = document.querySelector(".nav__logo");
    const navToggle = document.querySelector(".nav__toggle");
    if (!Toggle) {
      navLogo.classList.add("hide-on-menu-open");
      navToggle.classList.add("hide-on-menu-open");
    } else {
      navLogo.classList.remove("hide-on-menu-open");
      navToggle.classList.remove("hide-on-menu-open");
    }
  };

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <nav className="nav conatiner">
        <a href="index.html" className="nav__logo">
          Abdul Rehman
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <button
                className={`nav__link ${darkMode ? "dark-mode" : ""}`}
                id="dark_mode"
                onClick={handleDarkModeToggle}
              >
                {darkMode ? (
                  <i className="bx bxs-sun" id="sun"></i>
                ) : (
                  <i className="bx bxs-moon" id="moon"></i>
                )}
              </button>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={handleToggleMenu}
          ></i>
        </div>

        <div className="nav__toggle" onClick={handleToggleMenu}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

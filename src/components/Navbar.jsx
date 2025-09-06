import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 w-full bg-flashWhite/95 shadow-sm backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        {/* <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <img
            src={logotext}
            alt="Logo text"
            className="w-20 sm:w-28 object-contain -ml-2"
          />
        </Link> */}

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`uppercase tracking-wide text-[15px] font-medium transition-colors ${
                  active === nav.title
                    ? "text-taupe"
                    : "text-eerieBlack hover:text-taupe"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? close : menu}
            alt="menu toggle"
            className="w-7 h-7 object-contain"
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-screen w-3/4 bg-flashWhite shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            className="self-end"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <img src={close} alt="close" className="w-6 h-6" />
          </button>
          <ul className="flex flex-col gap-6 mt-12">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    setActive(nav.title);
                  }}
                  className={`block text-lg font-semibold uppercase tracking-wide ${
                    active === nav.title
                      ? "text-taupe"
                      : "text-eerieBlack hover:text-taupe"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

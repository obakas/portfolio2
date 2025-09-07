import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 w-full bg-[#cfc7c4]/90 backdrop-blur-md shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20">

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[100px] h-[100px] object-contain lg:w-[150px] lg:h-[150px]"
          />

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`uppercase tracking-wide text-[15px] font-medium transition-colors ${active === nav.title
                  ? "text-taupe border-b-2 border-taupe pb-1"
                  : "text-[#2b2725] hover:text-taupe"
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
        className={`sm:hidden fixed top-0 right-0 h-screen w-3/4 bg-gradient-to-br from-[#e9e4e1] to-[#cfc7c4] shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
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
                  onClick={() => setActive(nav.title)}
                  className={`uppercase tracking-wide text-[15px] font-medium transition-colors ${active === nav.title
                      ? "text-taupe border-b-2 border-taupe pb-1"
                      : "text-[#2b2725] hover:text-taupe"
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

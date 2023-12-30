import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav>
      <div className="logo"> {"<> CK </>"}</div>
      <button
        aria-expanded={toggle}
        aria-label="toggle-menu"
        onClick={() => {
          settoggle(!toggle);
        }}
        className="togglebtn"
      >
        <i class="ri-menu-3-fill"></i>
      </button>

      <ul className="navlinks">
        <li>
          <a aria-label="home" onClick={() => settoggle(false)} href="/">
            home
          </a>
        </li>
        <li>
          <a aria-label="about" onClick={() => settoggle(false)} href="#about">
            about
          </a>
        </li>
        <li>
          <a
            aria-label="projects"
            onClick={() => settoggle(false)}
            href="#projects"
          >
            projects
          </a>
        </li>
        <li>
          <a
            aria-label="blog"
            onClick={() => settoggle(false)}
            href="#blog"
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            aria-label="contact"
            onClick={() => settoggle(false)}
            href="#contact"
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

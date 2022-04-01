import React, { useEffect, useState } from "react";
import DarkMode from "../DarkMode";

const Nav = (props) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => handleShow(window.scrollY > 100);
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <nav className='nav-links'>
        <ul>
          <li>
            <a href='#profile'>Profile</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </nav>
      {!props.switchDisabled && <DarkMode />}
    </div>
  );
};

export default Nav;

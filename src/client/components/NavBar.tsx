import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <ul className="mainMenu">
      <li>
        <strong>
          <Link
            activeClass="about"
            to="about"
            smooth={true}
            spy={true}
            duration={700}
          >
            ABOUT
          </Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link
            activeClass="techStack"
            to="techStack"
            smooth={true}
            spy={true}
            duration={700}
          >
            TECH STACK
          </Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link
            activeClass="portfolio"
            to="portfolio"
            smooth={true}
            spy={true}
            duration={700}
          >
            PORTFOLIO
          </Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link
            activeClass="connect"
            to="connect"
            smooth={true}
            spy={true}
            duration={700}
          >
            CONNECT
          </Link>
        </strong>
      </li>
    </ul>
  );
};

export default NavBar;

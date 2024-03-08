import React from 'react';
import { Link } from 'react-scroll';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link
          activeClass="home"
          to="home"
          smooth={true}
          spy={true}
          offset={-250}
          duration={700}
        >
          <Logo />
        </Link>
        <NavBar />
      </nav>
    </div>
  );
};

export default Header;

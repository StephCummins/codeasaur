import React from 'react';
import { Element } from 'react-scroll';
import '../../public/style.scss';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TechStackPage from './components/TechStackPage';
import PortfolioPage from './components/PortfolioPage';
import ConnectPage from './components/ConnectPage';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Element name="home" style={{ height: '100vh' }}>
        <HomePage />
      </Element>
      <Element name="about" style={{ height: '100vh' }}>
        <AboutPage />
      </Element>
      <Element name="techStack" style={{ height: '100vh' }}>
        <TechStackPage />
      </Element>
      <Element name="portfolio" style={{ height: '100vh' }}>
        <PortfolioPage />
      </Element>
      <Element name="connect" style={{ height: '100vh' }}>
        <ConnectPage />
      </Element>
      <Footer />
    </>
  );
};

export default App;

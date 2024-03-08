import React, { useState } from 'react';
import Header from './Header';

const HomePage = (): JSX.Element => {
  return (
    <main>
      <Header />
      <div className="homePage">
        <h1>Hi, I'm Stephanie</h1>
        <p>
          A results-oriented full stack Software Engineer with a passion for
          creating through technology, contributing to open-source tools, and
          developing responsive design-driven user interfaces.
        </p>
      </div>
    </main>
  );
};

export default HomePage;

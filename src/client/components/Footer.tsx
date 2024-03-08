import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <p>Scroll to Top</p>
      <img
        src={require('../../../public/assets/icon_Large.png')}
        alt="Footer Icon"
      />
    </div>
  );
};

export default Footer;

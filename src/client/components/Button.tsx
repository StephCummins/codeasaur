import React from 'react';

const Button = ({ text, url }): JSX.Element => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;

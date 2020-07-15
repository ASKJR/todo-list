import React from 'react';
import Logo from '../assets/images/logo.png';

const logo = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" style={{ height: '110px' }} />
    </div>
  );
};

export default logo;

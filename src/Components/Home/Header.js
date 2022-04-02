import logo from './logo.png';
import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" className="rounded-corners" />
      </header>
    </div>
  )
}

export default Header
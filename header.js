import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="your-logo.png" alt="EasyBiz Logo" />
        <h1>EasyBiz</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import React from "react";

const Header = () => {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  return (
    <div className="header">
      {logo}
      <h3>Shadab's Keep App</h3>
    </div>
  );
};

export default Header;

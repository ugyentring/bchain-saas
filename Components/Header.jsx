import React from "react";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "ERC20",
      link: "/create",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];
  return (
    <header className="header-one">
      <div className="header-menu-area header-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
              <div className="logo">
                <a href="/">
                  <img src="/img/logo/logo2.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9">
              <div className="header-right">
                <a href="#" className="top-btn coin-btn">
                  Buy Token
                </a>
              </div>
              <div className="header_menu f-right">
                <nav id="mobile-menu">
                  <ul className="main-menu">
                    {menuList.map((menu, i) => (
                      <li className="result" key={i + 1}>
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

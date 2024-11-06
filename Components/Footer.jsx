import React from "react";

const Footer = () => {
  const coinList = ["Rippple", "Bitcoin", "Ethereum", "Litecoin", "Ripple"];

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
    {
      name: "Detail",
      link: "#",
    },
  ];

  return (
    <footer>
      <div className="footer1">
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-content logo-footer">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <a href="#">
                        <img src="/img/logo/logo2.png" alt="logo" />
                      </a>
                    </div>
                    <div className="footer-icons">
                      <ul>
                        {[1, 2, 3, 4, 5].map((social, i) => (
                          <li key={i}>
                            <a href="#">
                              <img src={`img/about/midea${i + 1}.png`} alt="" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-content rs-mar-0">
                  <div className="footer-head">
                    <h4>Payment Options</h4>
                    <ul className="footer-list">
                      {coinList.map((coin, i) => (
                        <li key={i}>
                          <a href="#">{coin}</a>
                        </li>
                      ))}
                    </ul>
                    <ul className="footer-list">
                      {menuList.map((menu, i) => (
                        <li key={i}>
                          <a href={menu.link}>{menu.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-content last-content rs-mar-0">
                  <div className="footer-head">
                    <h4>Subscribe</h4>
                    <p>
                      Subscribe to our mailing list to get the latest news
                      update
                    </p>
                    <div className="subs-fields">
                      <div className="suscribe-input">
                        <input
                          type="email"
                          className="email form-control width-80"
                          placeholder="Enter Email"
                        />
                        <button
                          type="submit"
                          id="sus_submit"
                          name="send"
                          className="subs-btn coin-btn"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>
                    Copyright © 2024 <a href="#">@ugyencode</a>. All rights
                    reserved
                  </p>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-menu">
                  <ul>
                    {["About", "Privacy Policy", "Terms & Conditions"].map(
                      (el, i) => (
                        <li key={i}>
                          <a href="#">{el}</a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

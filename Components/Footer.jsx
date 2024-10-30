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
      <div class="footer1">
        <div class="footer-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="footer-content logo-footer">
                  <div class="footer-head">
                    <div class="footer-logo">
                      <a href="#">
                        <img src="/img/logo/logo2.png" alt="logo" />
                      </a>
                    </div>
                    <div class="footer-icons">
                      <ul>
                        {[1, 2, 3, 4, 5].map((social, i) => (
                          <li>
                            <a href="#">
                              <img src={`img/about/medea${i + 1}.png`} alt="" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="footer-content rs-mar-0">
                  <div class="footer-head">
                    <h4>Payment Options</h4>
                    <ul class="footer-list">
                      {coinList.map((coin, i) => (
                        <li>
                          <a href="#">{coin}</a>
                        </li>
                      ))}
                    </ul>
                    <ul class="footer-list">
                      {menuList.map((menu, i) => (
                        <li>
                          <a href={menu.link}>{menu.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="footer-content last-content rs-mar-0">
                  <div class="footer-head">
                    <h4>Subscribe</h4>
                    <p>
                      Subscribe to our mailing list to get the latest news
                      update
                    </p>
                    <div class="subs-fields">
                      <div class="suscribe-input">
                        <input
                          type="email"
                          class="email form-control width-80"
                          placeholder="Enter Email"
                        />
                        <button
                          type="submit"
                          id="sus_submit"
                          name="send"
                          class="subs-btn coin-btn"
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

        <div class="footer-area-bottom">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="copyright">
                  <p>
                    Copyright © 2024 <a href="#">@ugyencode</a>. All rights
                    reserved
                  </p>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="footer-menu">
                  <ul>
                    {["About", "Privacy Policy", "Terms & Conditions"].map(
                      (el, i) => (
                        <li>
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

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ERC20 = ({ setActive, createERC20 }) => {
  const [token, setToken] = useState({
    name: "",
    symbol: "",
    supply: 0,
  });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };

  return (
    <div className="login-area area-padding fix">
      <div className="login-overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="login-form signup-form">
              <span
                onClick={() => setActive(false)}
              >
                <AiOutlineClose />
              </span>
              <h4 className="login-title text-center">Create ERC20 Token</h4>

              <div id="contactForm" className="log-form">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={(e) => handleTokenInfo("name", e)}
                />

                <input
                  type="text"
                  id="symbol"
                  className="form-control"
                  placeholder="Symbol"
                  required
                  onChange={(e) => handleTokenInfo("symbol", e)}
                />

                <input
                  type="number"
                  id="msg_subject"
                  className="form-control"
                  placeholder="Total Supply"
                  required
                  onChange={(e) => handleTokenInfo("supply", e)}
                />

                <button
                  onClick={() => createERC20(token)}
                  id="submit"
                  type="submit"
                  className="slide-btn color-btn login-btn"
                >
                  Create Token
                </button>

                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
                <div className="clear"></div>
                <div className="separator text-center">
                  <span>Create Your ERC20 Token</span>
                </div>

                <div className="sign-icon">
                  <div className="acc-not">
                    with a minimum fee of <a>1 Sepolia</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERC20;

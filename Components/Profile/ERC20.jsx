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
            <div className="login-form signup-form p-4 shadow rounded">
              <span
                onClick={() => setActive(false)}
                className="close-btn"
                style={{
                  display: "inline-block",
                  padding: "8px",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                <AiOutlineClose />
              </span>
              <h4 className="login-title text-center mb-4">Create ERC20 Token</h4>

              <div id="contactForm" className="login-form">
                <input
                  type="text"
                  id="name"
                  className="form-control mb-3 p-2"
                  placeholder="Token Name"
                  required
                  onChange={(e) => handleTokenInfo("name", e)}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />

                <input
                  type="text"
                  id="symbol"
                  className="form-control mb-3 p-2"
                  placeholder="Token Symbol"
                  required
                  onChange={(e) => handleTokenInfo("symbol", e)}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />

                <input
                  type="number"
                  id="supply"
                  className="form-control mb-3 p-2"
                  placeholder="Total Supply"
                  required
                  onChange={(e) => handleTokenInfo("supply", e)}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />

                <button
                  onClick={() => createERC20(token)}
                  id="submit"
                  type="submit"
                  className="btn btn-primary w-100 py-2 mt-3"
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }}
                >
                  Create Token
                </button>

                <div id="msgSubmit" className="h3 text-center hidden mt-3"></div>
                <div className="separator text-center mt-4">
                  <span>Create Your ERC20 Token</span>
                </div>

                <div className="sign-icon text-center mt-2">
                  <div className="acc-not">
                    with a minimum fee of <a href="#">0.01 Sepolia</a>
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

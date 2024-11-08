import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Transfer = ({ setTransfer, transferNativeToken }) => {
  const [token, setToken] = useState({
    address: "",
    tokenNo: "",
  });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };

  return (
    <div className="login-area area-padding fix">
      <div className="login-overlay"></div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="login-form signup-form">
              <span onClick={() => setTransfer(false)}>
                <AiOutlineClose />
              </span>
              <h4 className="login-title text-center">Transfer Token</h4>

              <div id="contactForm" className="log-form">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="address"
                  required
                  onChange={(e) => handleTokenInfo("address", e)}
                />
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="amount"
                  required
                  onChange={(e) => handleTokenInfo("tokenNo", e)}
                />

                <button
                  onClick={() => transferNativeToken(token)}
                  type="submit"
                  id="submit"
                  className="slide-btn color-btn login-btn"
                >
                  Transfer Token
                </button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
                <div className="clear"></div>
                <div className="separator text-center">
                  <span>Create Your own Token</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;

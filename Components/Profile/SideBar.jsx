import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";

const SideBar = ({ setActive, setOpen, open, address, setTransfer }) => {
  const menuList = [
    {
      name: "Dashboard",
    },
    {
      name: "Your Token",
    },
    {
      name: "Donation",
    },
  ];

  return (
    <div className="col-xl-3  col-lg-3 col-md-4">
      <aside className="sidebar">
        <div className="dashboard-side">
          <div className="dashboard-head">
            <div className="dashboard-profile">
              <img src="img/about/profile.png" alt="profile" />
              <div className="profile-content">
                <span className="pro-name">Ugyen Tshering</span>
                <span className="pro-number">{address.slice(0.15)}...</span>
              </div>
            </div>
          </div>

          <div className="dashboard-menu">
            <ul>
              {menuList.map((el, i) => (
                <li
                  key={i}
                  onClick={() => setOpen(el.name)}
                  className={open === el.name ? "active" : ""}
                >
                  <a>
                    <BsBoxArrowRight />
                    <span className="new_space"></span>
                    {el.name}
                  </a>
                </li>
              ))}

              <li onClick={() => setActive(true)}>
                <a href="#">
                  <BsBoxArrowRight />
                  <span className="new_space"></span>
                  Create Token
                </a>
              </li>

              <li onClick={() => setTransfer(true)}>
                <a href="#">
                  <BsBoxArrowRight />
                  <span className="new_space"></span>
                  Transfer Token
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;

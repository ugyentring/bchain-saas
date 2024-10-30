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
    <div class="col-xl-3  col-lg-3 col-md-4">
      <aside class="sidebar">
        <div class="dashboard-side">
          <div class="dashboard-head">
            <div class="dashboard-profile">
              <img src="img/about/profile.png" alt="profile" />
              <div class="profile-content">
                <span class="pro-name">Ugyen Tshering</span>
                <span class="pro-number">{address.slice(0.15)}...</span>
              </div>
            </div>
          </div>

          <div class="dashboard-menu">
            <ul>
              {menuList.map((el, i) => (
                <li
                  onClick={() => setOpen(el.name)}
                  class={open === el.name ? "active" : ""}
                >
                  <a>
                    <BsBoxArrowRight />
                    <span class="new_space"></span>
                    {el.name}
                  </a>
                </li>
              ))}

              <li onClick={() => setActive(true)}>
                <a href="#">
                  <BsBoxArrowRight />
                  <span class="new_space"></span>
                  Create Token
                </a>
              </li>

              <li onClick={() => setTransfer(true)}>
                <a href="#">
                  <BsBoxArrowRight />
                  <span class="new_space"></span>
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

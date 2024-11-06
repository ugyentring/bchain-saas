import React, { useState } from "react";

//internal import
import { Table, TableTwo } from "../index";

const ProfileMain = ({
  getAllERC20TokensListed,
  getAllDonations,
  setOpen,
  open,
  balance,
  fee,
  createERC20,
  mainBalance,
  nativeToken,
  address,
  getUserERC20Tokens,
  widthdrawFund,
  donationFund,
}) => {
  const details = [
    {
      title: "Created",
      value: `#${getUserERC20Tokens?.length || 0}`,
    },
    {
      title: "ERC20s",
      value: `#${getAllERC20TokensListed?.length || 0}`,
    },
    {
      title: "listing Fee",
      value: `${fee} Sepolia`,
    },
    {
      title: `${nativeToken?.symbol} Token`,
      value: `${nativeToken?.balance}`,
    },
    {
      title: "Contract Balance",
      value: `${
        mainBalance == undefined ? "Only Owner Can View" : mainBalance
      }`,
    },
  ];

  const contractOwner = "0xdFB8e66F7331F2c2D080b62D5505043aF01233d2"

  return (
    <div className="col-xl-9 col-lg-9 col-md-8">
      <div className="row user-dashboard">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="user-top">
            <div className="user-balance">
              <span>Your balance</span>
              <div className="main-bal">
                {balance ? balance.slice(1, 7) : "N/A"} Sepolia
              </div>
            </div>
            <div className="userboard-btn">
              <a className="user-btn coin-btn" onClick={() => donationFund()}>
                Donate now
              </a>

              {address == contractOwner && (
                <a onClick={() => widthdrawFund()} className="user-btn color-btn">
                  Withdraw Funds
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row dashboard-content">
        {details.map((detail, i) => (
          <div key={i + 1} className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-dash-head">
              <div className="dashboard-amount d-flex flex-wrap align-items-center">
                <div className="amount-content">
                  <span className="pro-name">{detail.title}</span>
                  <span className="pro-money">{detail.value}</span>
                </div>
                <div className="invest-tumb">
                  <img src={`img/icon/d${i + 1}.png`} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open == "Dashboard" ? (
        <Table
          title="All cretaed ERC20 tokens"
          tableData={getAllERC20TokensListed || []}
        />
      ) : open == "Your Token" ? (
        <Table title="Your ERC20 Tokens" tableData={getUserERC20Tokens} />
      ) : open == "Donation" ? (
        <TableTwo title="All your donation" tableData={getAllDonations} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileMain;

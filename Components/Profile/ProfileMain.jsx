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

  const contractOwner = 0x5e47bd5138b25daf2dbecbe78b0f6fb5daee8e7c;

  return (
    <div class="col-xl-9 col-lg-9 col-md-8">
      <div class="row user-dashboard">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="user-top">
            <div class="user-balance">
              <span>Your balance</span>
              <div class="main-bal">
                {balance ? balance.slice(1, 7) : "N/A"} Sepolia
              </div>
            </div>
            <div class="userboard-btn">
              <a class="user-btn coin-btn" onClick={() => donationFund()}>
                Donate now
              </a>

              {address == contractOwner && (
                <a onClick={() => widthdrawFund()} class="user-btn color-btn">
                  Withdraw Funds
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="row dashboard-content">
        {details.map((detail, i) => (
          <div key={i + 1} class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-dash-head">
              <div class="dashboard-amount d-flex flex-wrap align-items-center">
                <div class="amount-content">
                  <span class="pro-name">{detail.title}</span>
                  <span class="pro-money">{detail.value}</span>
                </div>
                <div class="invest-tumb">
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

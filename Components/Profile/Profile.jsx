import React, { useState } from "react";

//internal import
import {ProfileMain, SideBar} from "../index"

const Profile = ({
  setActive,
  getAllERC20TokensListed,
  getUserERC20Tokens,
  address,
  getAllDonations,
  balance,
  fee,
  mainBalance,
  nativeToken,
  withdrawFund,
  donationFund,
  createERC20,
  setTransfer

}) => {
const [open, setOpen] = useState("Dashboard");

  return <div className="dashboard-area bg-color area-padding-3">
    <div className="container">
      <div className="row">
        <SideBar 
        address={address}
        setOpen={setOpen}
        open={open}
        setActive={setActive}
        setTransfer={setTransfer}
        />

        <ProfileMain
        nativeToken={nativeToken}
        mainBalance={mainBalance}
        getAllDonations={getAllDonations}
        donationFund={donationFund}
        withdrawFund={withdrawFund}
        balance={balance}
        createERC20={createERC20}
        setOpen={setOpen}
        open={open}
        fee={fee}
        address={address}
        getAllERC20TokensListed={getAllERC20TokensListed}
        getUserERC20Tokens={getUserERC20Tokens}
        />
      </div>
    </div>
  </div>;
}; 

export default Profile;

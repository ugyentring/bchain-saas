import React, { useState } from "react";

import {
  Header,
  Footer,
  UserProfile,
  Profile,
  ERC20,
  Transfer,
} from "../Components/index.js";
import { useStateContext } from "../Context/index.js";

const create = () => {
  const [active, setActive] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const {
    createERC20,
    getAllERC20TokensListed,
    getAllERC20Tokens,
    getAllDonations,
    balance,
    fee,
    mainBalance,
    nativeToken,
    address,
    getUserERC20Tokens,
    widthdrawFund,
    donationFund,
    transferNativeToken,
    transferERC20,
  } = useStateContext();
};

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

  return (
    <div>
      <Header />
      {active && <ERC20 setActive={setActive} createERC20={createERC20} />}

      {/*  {transfer && (
        <Transfer
          setTransfer={setTransfer}
          transferNativeToken={transferNativeToken}
        />
      )} */}

      <main>
        <UserProfile />
        <Profile
          getAllERC20TokensListed={getAllERC20TokensListed}
          getAllERC20Tokens={getAllERC20Tokens}
          getAllDonations={getAllDonations}
          balance={balance}
          fee={fee}
          transferNativeToken={transferNativeToken}
          mainBalance={mainBalance}
          nativeToken={nativeToken}
          address={address}
          getUserERC20Tokens={getUserERC20Tokens}
          widthdrawFund={widthdrawFund}
          donationFund={donationFund}
          transferERC20={transferERC20}
          setActive={setActive}
          setTransfer={setTransfer}
        />
      </main>
      <Footer />
    </div>
  );
};

export default create;

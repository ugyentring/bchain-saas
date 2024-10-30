import React, { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  CheckIfWalletIsConnected,
  connectWallet,
  connectingWithContract,
  getBalance,
  connectingNativeTokenContract,
} from "../Utils/index.js";

import { ERC20Generator_ABI, ERC20Generator_BYTECODE } from "./constants";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [getAllERC20TokensListed, setGetAllERC20TokensListed] = useState([]);
  const [getAllERC20Tokens, setGetAllERC20Tokens] = useState([]);
  const [getAllDonations, setGetAllDonations] = useState([]);
  const [balance, setBalance] = useState();
  const [fee, setFee] = useState();
  const [mainBalance, setMainBalance] = useState();
  const [nativeToken, setNativeToken] = useState();

  // Fetch initial data
  const fetchInitialData = async () => {
    try {
      // Get user account
      const account = await CheckIfWalletIsConnected();
      setAddress(account);

      // Get user balance
      const userBalance = await getBalance();
      setBalance(ethers.utils.formatEther(userBalance.toString()));

      // Get native token balance
      const nativeContract = await connectingNativeTokenContract();
      if (account) {
        const nativeBalance = await nativeContract.balanceOf(account);
        const nativeName = await nativeContract.name();
        const nativeSymbol = await nativeContract.symbol();
        const nativeDecimals = await nativeContract.decimals();
        const nativeTotalSupply = await nativeContract.totalSupply();
        const nativeTotalAddress = await nativeContract.address;

        const nativeToken = {
          balance: ethers.utils.formatUnits(nativeBalance.toString(), "ether"),
          name: nativeName,
          symbol: nativeSymbol,
          decimals: nativeDecimals,
          address: nativeTotalAddress,
          totalSupply: ethers.utils.formatUnits(
            nativeTotalSupply.toString(),
            "ether"
          ),
        };
        setNativeToken(nativeToken);
      }

      // Get contract
      const lookUpContract = await connectingWithContract();
      if (account === "0x5e47Bd5138B25DaF2DBecbE78B0f6Fb5dAee8e7C") {
        const contractBalance = await lookUpContract.getBalance();
        setMainBalance(
          ethers.utils.formatUnits(contractBalance.toString(), "ether")
        );
      }

      // Get all ERC20 tokens
      const getAllERC20TokenListed = await lookUpContract.getAllERC20Tokens();
      const parsedToken = getAllERC20TokenListed.map((ERC20token) => ({
        tokenId: ERC20token.tokenId.toNumber(),
        owner: ERC20token.owner,
        tokenSupply: ERC20token.tokenSupply,
        tokenName: ERC20token.tokenName,
        tokenSymbol: ERC20token.tokenSymbol,
        tokenAddress: ERC20token.tokenAddress,
        tokenTransactionHash: ERC20token.tokenTransactionHash,
        tokenCreatedDate: ERC20token.tokenCreatedDate,
      }));
      setGetAllERC20TokensListed(parsedToken);

      // Get user ERC20 tokens
      if (account) {
        const getUserERC20Tokens = await lookUpContract.getUserERC20Tokens(
          account
        );
        const parsedUserERC20Tokens = getUserERC20Tokens.map((ERC20token) => ({
          tokenId: ERC20token.tokenId.toNumber(),
          owner: ERC20token.owner,
          tokenSupply: ERC20token.tokenSupply,
          tokenName: ERC20token.tokenName,
          tokenSymbol: ERC20token.tokenSymbol,
          tokenAddress: ERC20token.tokenAddress,
          tokenTransactionHash: ERC20token.tokenTransactionHash,
          tokenCreatedDate: ERC20token.tokenCreatedDate,
        }));
        setGetAllERC20Tokens(parsedUserERC20Tokens);
      }

      // Listing price
      const listingPrice = await lookUpContract.getListingPrice();
      const price = ethers.utils.formatUnits(listingPrice.toString(), "ether");
      setFee(price);

      // Get all donations
      const getAllDonations = await lookUpContract.getAllDonations();
      const parsedDonations = getAllDonations.map((donation) => ({
        donationID: donation.donationID.toNumber(),
        donor: donation.donor,
        fund: ethers.utils.formatUnits(donation.fund.toString(), "ether"),
      }));
      setGetAllDonations(parsedDonations);
    } catch (error) {
      console.error("Error fetching initial data:", error);
      alert("Failed to load initial data. Please try again later.");
    }
  };

  // Use effect
  useEffect(() => {
    fetchInitialData();
  }, []);

  // Deploy contract
  const _deployedContract = async (signer, account, name, symbol, supply) => {
    try {
      const factory = new ethers.ContractFactory(
        ERC20Generator_ABI,
        ERC20Generator_BYTECODE,
        signer
      );
      const totalSupply = Number(supply);
      const _initialSupply = ethers.utils.parseUnits(
        totalSupply.toString(),
        "ether"
      );

      const contract = await factory.deploy(_initialSupply, name, symbol);
      await contract.deployed();

      const today = Date.now();
      const _tokenCreatedDate = new Date(today).toLocaleDateString("en-US");

      if (contract.address) {
        await _createERC20Token(
          account,
          contract.address,
          name,
          symbol,
          supply.toString(),
          contract.deployTransaction.hash,
          _tokenCreatedDate
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _createERC20Token = async (
    _owner,
    _tokenAddress,
    _tokenName,
    _tokenSymbol,
    _tokenSupply,
    _transactionHash,
    _tokenCreatedDate
  ) => {
    try {
      const contract = await connectingWithContract();
      const listingPrice = await contract.getERC20TokenListingPrice();

      const transaction = await contract.createERC20Token(
        _owner,
        _tokenAddress,
        _tokenName,
        _tokenSymbol,
        _tokenSupply,
        _transactionHash,
        _tokenCreatedDate,
        {
          value: listingPrice.toString(),
        }
      );

      await transaction.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const createERC20 = async (token) => {
    const { name, symbol, supply } = token;

    try {
      if (!name || !symbol || !supply) {
        console.log(token);
      } else {
        const account = await CheckIfWalletIsConnected();
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        _deployedContract(signer, account, name, symbol, supply);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Withdraw function
  const withdrawFund = async () => {
    try {
      const contract = await connectingWithContract();
      const withdraw = await contract.withdraw();
      await withdraw.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Donation fund
  const donationFund = async () => {
    try {
      const donationAmount = ethers.utils.parseEther("0.1");
      const contract = await connectingWithContract();
      const donate = await contract.donate({
        value: donationAmount.toString(),
      });
      await donate.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Transfer native token
  const transferNativeToken = async (token) => {
    try {
      const { address, tokenNo } = token;
      const transferAmount = ethers.utils.parseEther(tokenNo);
      const contract = await connectingNativeTokenContract();
      const transaction = await contract.transfer(address, transferAmount);
      await transaction.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        createERC20,
        getAllDonations,
        withdrawFund,
        donationFund,
        transferNativeToken,
        fee,
        address,
        balance,
        nativeToken,
        getAllERC20Tokens,
        getAllERC20TokensListed,
        mainBalance,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

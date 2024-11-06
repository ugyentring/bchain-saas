import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  LookUpContarct_ABI,
  LookUpContarct_ADDRESS,
  ERC20Generator_ADDRESS,
  ERC20Generator_ABI,
} from "../Context/constants";

export const CheckIfWalletIsConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Please install metamask");

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    return accounts.length ? accounts[0] : null;
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object");
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return alert("Please install metamask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object");
  }
};

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    LookUpContarct_ADDRESS,
    LookUpContarct_ABI,
    signerOrProvider
  );


export const connectingWithContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

const fetchTokenContract = (signerOrProvider) =>
  new ethers.Contract(
    ERC20Generator_ADDRESS,
    ERC20Generator_ABI,
    signerOrProvider
  );


export const connectingNativeTokenContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

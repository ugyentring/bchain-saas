const { ethers } = require("ethers");
const ERC20Generator = artifacts.require("ERC20Generator");

const tokens = (_number) => {
  return ethers.utils.parseUnits(_number.toString(), "ether");
};

module.exports = async function (deployer) {
  const _tokenName = "UT";
  const _tokenSymbol = "UT";
  const _initialSupply = tokens(1000);

  console.log("Deploying ERC20Generator...");
  await deployer.deploy(ERC20Generator, _initialSupply, _tokenName, _tokenSymbol);
  const erc20Generator = await ERC20Generator.deployed();
  console.log("ERC20Generator deployed to:", erc20Generator.address);
};

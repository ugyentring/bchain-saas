const ERC20Generator = artifacts.require("ERC20Generator");
const LookUpContract = artifacts.require("LookUpContract");

module.exports = async function (deployer) {
  const tokenName = "UGYEN";
  const tokenSymbol = "UT";
  const initialSupply = web3.utils.toWei("1000", "ether");

  //deploy ERC20Generator
  await deployer.deploy(ERC20Generator, initialSupply, tokenName, tokenSymbol);
  const erc20Generator = await ERC20Generator.deployed();
  console.log("ERC20Generator deployed to:",erc20Generator.address);

  //deploy LookUpContract
  await deployer.deploy(LookUpContract);
  const lookUpContract = await LookUpContract.deployed();
  console.log("LookUpContract deployed to:",lookUpContract.address);
};

const hre = require("hardhat");

//convert to ether
const tokens = (_number) => {
  return ethers.utils.parseUnits(_number.toString(), "ether");
};

async function main() {
  //ERC20 Generator
  const _tokenName = "UT";
  const _tokenSymbol = "UT";
  const _initialSupply = tokens(1000);

  const ERC20Generator = await hre.ethers.getContractFactory("ERC20Generator");
  const erc20Generator = await ERC20Generator.deploy(
    _tokenName,
    _tokenSymbol,
    _initialSupply
  );

  await erc20Generator.deployed();
  console.log("ERC20Generator deployed to:", erc20Generator.address);

  //lookup contract
  const LookUpContract = await hre.ethers.getContractFactory("LookUpContract");
  const lookUpContract = await LookUpContract.deploy();

  await lookUpContract.deployed();
  console.log("LookUpContract deployed to:", lookUpContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const LookUpContract = artifacts.require("LookUpContract");

module.exports = async function (deployer) {
  console.log("Deploying LookUpContract...");
  await deployer.deploy(LookUpContract);
  const lookUpContract = await LookUpContract.deployed();
  console.log("LookUpContract deployed to:", lookUpContract.address);
};

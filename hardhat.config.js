require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_ALCHEMY =
  "https://eth-sepolia.g.alchemy.com/v2/dI9ngbkvn_XaMwlJ9D__-oxTD86U3Mnh";
const PRIVATE_KEY =
  "b8f78d5747712c87b33bd0dc36fda9852db4a47f1f5951b1c3e413b524d76616";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_ALCHEMY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

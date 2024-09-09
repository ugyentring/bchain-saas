require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_ALCHEMY =
  "https://eth-sepolia.g.alchemy.com/v2/dI9ngbkvn_XaMwlJ9D__-oxTD86U3Mnh";
const PRIVATE_KEY =
  "f84f28305451e17ee99be53d485d897a4aacf7fa3871c7717e8057a951242970";
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

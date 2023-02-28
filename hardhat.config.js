require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-etherscan");
//require("solidity-coverage");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-solhint");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
    },
    localhost: {
      url: 'http://127.0.0.1:7545'
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.12",
        settings: { }
      },
      {
        version: "0.8.0"
      }
    ]
  }
};

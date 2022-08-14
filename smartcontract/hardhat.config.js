require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_MUMBAI = process.env.POLYGON_MUMBAI
const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGON_SCAN_API = process.env.POLYGON_SCAN_API
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API = process.env.ETHERSCAN_API

module.exports = {
  solidity: '0.8.9',
  networks: {
    polygonMumbai: {
      url: POLYGON_MUMBAI,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGON_SCAN_API,
      goerli: ETHERSCAN_API,
    },
  },
}

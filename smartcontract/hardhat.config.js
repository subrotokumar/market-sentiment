require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_MUMBAI = process.env.POLYGON_MUMBAI
const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGON_SCAN_API = process.env.POLYGON_SCAN_API
module.exports = {
  solidity: '0.8.9',
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGON_SCAN_API,
  },
}

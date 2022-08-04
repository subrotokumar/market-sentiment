const { ethers } = require('hardhat')
require('../utils/verify')

async function main() {
  const MarketSentiment = await ethers.getContractFactory('MarketSentiment')
  const marketSentiment = await MarketSentiment.deploy()

  await marketSentiment.deployed()
  console.log('MarketSentiment deployed to: ', marketSentiment.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
  })

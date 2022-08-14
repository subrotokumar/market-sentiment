const { ethers, network } = require('hardhat')
const { verify } = require('../utils/verify')
require('dotenv').config()

async function main() {
  const MarketSentiment = await ethers.getContractFactory('MarketSentiment')
  const marketSentiment = await MarketSentiment.deploy()
  const args = []

  await marketSentiment.deployed()
  console.log('MarketSentiment deployed to: ', marketSentiment.address)

  // Verifying smartcontract
  console.log('Waiting for block confirmation...')
  await marketSentiment.deployTransaction.wait(5) // wait for 6 block to be mined
  await verify(marketSentiment.address, args)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
  })

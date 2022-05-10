// https://eth-ropsten.alchemyapi.io/v2/9OcVQl17_o1D3BXXvKp6lEgus2KjQoVp

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9OcVQl17_o1D3BXXvKp6lEgus2KjQoVp',
      accounts: ['4bc9da9633e0ffbd6a2d347a550bb561056316d172bfb27428a52b8e529f384f']
    }
  }
}
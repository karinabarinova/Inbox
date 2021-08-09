require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    process.env.ACCOUNT_MNEMONIC,
    "https://rinkeby.infura.io/v3/4c33b91839c244eea4646daf92e34f72"
);

const web3 = new Web3(provider);
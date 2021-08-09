const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor function
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    //get a list of all accounts
    web3.eth.getAccounts()
        .then(accounts => {
            console.log('accounts', accounts);
        })
        .catch((error) => {
            console.log(error);
        })
    //use one of them to deploy the contract
}); 

describe('Inbox', () => {
    it('Deploy a contract', () => {
        
    });
})
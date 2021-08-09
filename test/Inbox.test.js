const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor function
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const initialMessage = "Initial Contract Message";

beforeEach(async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();
    //use one of them to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [initialMessage] })
        .send({ from: accounts[0], gas: '1000000' })
}); 

describe('Inbox', () => {
    it('Deploy a contract', () => {
        assert.ok(inbox.options.address);
    });
    it('Verify existence of the initial message', async () => {
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, initialMessage);
    })
})
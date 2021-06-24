const HDWalletProvider = require("truffle-hdwallet-provider");
const infura = "https://rinkeby.infura.io/v3/4d0576bd55974d68993a3b9c98bc49b3";
// const fs = require('fs');
 const MNEMONIC = "ginger trial march rubber feature leg level obtain frog corn arctic nature"

let NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      network_id: 4,
      provider: function () {
        var wallet = new HDWalletProvider(MNEMONIC, infura);
        var nonceTracker = new NonceTrackerSubprovider();
        wallet.engine._providers.unshift(nonceTracker);
        nonceTracker.setEngine(wallet.engine);
        return wallet;
      }
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};
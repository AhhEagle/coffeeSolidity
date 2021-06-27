# COFFEE SUPPLY CHAIN ON BLOCKCHAIN
This is a udacity nanodegree project that aims at tracking the coffee supply from planting to the enventual consumption by the consumer.
The project utilises a decentalised architecture 

### Dependencies 
The following are the dependencies utilised in this project:
- Solidity: 0.4.25
- openzeppelin-solidity: "^2.1.2"
- truffle: "^5.0.1"
- truffle-assertions: "^0.9.2"
- truffle-hdwallet-provider: "^1.0.2"
- web3: "^0.20.0"
- web3-provider-engine: "^14.1.0"

### Libraries Explanation
Truffle: Truffle is a development environment, asset pipiline and as well as a testing framework. Truffle was used in this project to compile, test and also deploy my smart contract to rinkeby. 

Web3: Web3 was used to interact with the rinkeby ethereum nodeUpdat

### Run the application
1. Clone the repository using `git clone <url>`
2. Change directory to app and install all modules listed using
   `npm install`
3 Start Truffle by running
```bash
# For starting the development console
truffle develop
# truffle console

# For compiling the contract, inside the development console, run:
compile

# For migrating the contract to the locally running Ethereum network, inside the development console
migrate --reset

# For running unit tests the contract, inside the development console, run:
test
```

3. Frontend - Once you are ready to start your frontend, run the following from the app folder:
```bash
cd app
npm run dev
```

### Project Rinkeby Details
Contract: 0xa87D173CbE79BA37c07c397aF926824FC2009b6f
Transaction hash: 0x485a680723ad7849002d2956dd4fa01c8f99288e6dc14631216e9ecba752d88a
https://rinkeby.etherscan.io/address/0xa87D173CbE79BA37c07c397aF926824FC2009b6f


## UML Diagrams
Sequence Diagram

<img width="582" alt="SequenceImage" src="https://user-images.githubusercontent.com/24871973/123308854-19961980-d51c-11eb-9203-05444a46a671.png">

Activity Diagram

![Activity Diagram](https://user-images.githubusercontent.com/24871973/123317165-98438480-d525-11eb-9c46-445f7ceb272a.png)


Class Diagram

![Data Model Diagram](https://user-images.githubusercontent.com/24871973/123309199-86111880-d51c-11eb-862a-410985c42829.png)

State Diagram

![State Daigram](https://user-images.githubusercontent.com/24871973/123317136-9083e000-d525-11eb-9e73-6668d0ef0246.png)


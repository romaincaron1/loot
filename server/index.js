const { ethers } = require("ethers");
const CoinflipContract = require("../artifacts/contracts/Coinflip.sol/Coinflip.json");
require("dotenv").config();

async function main() {
	const coinflipContractAddress = process.env.CONTRACT_ADDRESS;
	const provider = new ethers.providers.WebSocketProvider(
		`wss://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET}`
	);

	const contract = new ethers.Contract(
		coinflipContractAddress,
		CoinflipContract.abi,
		provider
	);

	// event gameCreated(address _gameOwner, uint _amountBet, uint launchedTime);

	contract.on("gameCreated", (_gameOwner, _amountBet, launchedTime, event) => {
		let infos = {
			gameOwner: _gameOwner,
			amountBet: _amountBet,
			launchedTime: launchedTime,
			data: event,
		};
		console.log(JSON.stringify(infos, null, 4));
	});
}

main();

const { expect } = require("chai");
import { ethers } from "hardhat";
require("@nomiclabs/hardhat-waffle");

describe("Coinflip", function () {
	it("Should create a new game", async function () {
		const Coinflip = await ethers.getContractFactory("Coinflip");
		const coinflip = await Coinflip.deploy();
		const contract = await coinflip.deployed();

		const response = await contract.createGame({ value: 1000 });
        const createGameResponse = await response.wait();
        // @ts-ignore
        expect(parseInt(createGameResponse.events[0].args._amountBet)).to.equal(1000);
	});

    it("Should start a game between 2 players and pick a winner", async function () {
		const Coinflip = await ethers.getContractFactory("Coinflip");
		const coinflip = await Coinflip.deploy();
		const contract = await coinflip.deployed();

        const [a1, a2] = await ethers.getSigners();

        const addr1 = await a1.getAddress();

        // Create a game with addr1 and 1000 wei
        await contract.createGame({ value: 1000 });
        
        const response = contract.connect(a2).play(addr1, { value: 1000 });
        const playResponse = await (await response).wait();
        // @ts-ignore
        expect(parseInt(playResponse.events[0].args._winnableAmount)).to.equal(2000);
	});
})
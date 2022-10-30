import { ethers } from "hardhat";

async function main() {
  const Coinflip = await ethers.getContractFactory("Coinflip");
  const coinflip = await Coinflip.deploy();

  await coinflip.deployed();

  console.log(`Coinflip deployed to ${coinflip.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "FSEYYIURB5tQlWSJOvHEFv-aTD9WSdAt";
const GOERLI_PRIVATE_KEY =
	"8ee02ec2c8b9b7ad2bddd87bd897815562b7900bb2c3af1729a54c2506659a2d";

const config: HardhatUserConfig = {
	solidity: "0.8.17",
	paths: {
		artifacts: "../artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		goerli: {
			url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
			accounts: [GOERLI_PRIVATE_KEY],
		},
	},
};

export default config;

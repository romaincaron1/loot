import "../styles/globals.css";
import type { AppProps } from "next/app";
import userContext from "../contexts/userContext";
import { useEffect, useState } from "react";
import Web3 from "web3";

declare global {
	interface Window {
		ethereum?: any;
		web3?: any;
	}

	interface user {
		key: string;
		username: string;
		image: string;
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState({} as user);

	useEffect(() => {
		const getCurrentUser = async () => {
			if (window.web3) {
				try {
					window.web3 = new Web3(window.ethereum);
					const walletAddress = await window.web3.eth.requestAccounts();
					if (sessionStorage.getItem("user") !== null) {
						let user = JSON.parse(sessionStorage.getItem("user") ?? "");
						if (user.key === walletAddress[0]) {
							setUser(user);
						}
					}
				} catch (error) {
					console.log(error);
				}
			}
		};
		getCurrentUser();

		window.ethereum.on("accountsChanged", function (accounts: any) {
			window.location.reload();
		});
	}, []);

	return (
		<userContext.Provider value={{ user, setUser }}>
			<Component {...pageProps} />
		</userContext.Provider>
	);
}

export default MyApp;

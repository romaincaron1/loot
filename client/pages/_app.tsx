import "../styles/globals.css";
import type { AppProps } from "next/app";
import userContext from "../contexts/userContext";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
	interface Window {
		ethereum?: any;
	}

	interface user {
		key: string;
		username: string;
		image: string;
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState({} as user);

	// Setting the current user
	useEffect(() => {
		const getCurrentUser = async () => {
			if (window.ethereum) {
				try {
					const provider = new ethers.providers.Web3Provider(window.ethereum);
					const signer = provider.getSigner();
					const signerAddress = await signer.getAddress();
					if (sessionStorage.getItem("user") !== null) {
						let user = JSON.parse(sessionStorage.getItem("user") ?? "");
						if (user.key === signerAddress) {
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

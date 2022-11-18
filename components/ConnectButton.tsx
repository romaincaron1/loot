import React from "react";
import { db } from "../services/firebase";
import Web3 from "web3";

interface props {
	setUser: Function;
}

function ConnectButton({ setUser }: props) {
	const handleConnect = async () => {
		if (window.ethereum) {
			await window.ethereum.request({method: 'eth_requestAccounts'});
			window.web3 = new Web3(window.ethereum);
			const walletAddress = await window.web3.eth.requestAccounts();	
			const pk = walletAddress[0];
			const userRef = db.collection("users").doc(pk);
			const user = await userRef.get();
			if (user.exists) {
				setUser(user.data());
				sessionStorage.setItem('user', JSON.stringify(user.data()));
			} else {
				const user = {
					key: pk,
					username: pk,
				}
				db.collection("users").doc(pk).set(user);
				sessionStorage.setItem('user', JSON.stringify(user));
				setUser(user);
			}
		}
	};

	return (
		<button
			onClick={handleConnect}
			className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl p-2 font-bold"
		>
			CONNECT WITH METAMASK
		</button>
	);
}

export default ConnectButton;

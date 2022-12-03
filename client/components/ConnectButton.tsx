import React from "react";
import { db } from "../services/firebase";
import { ethers } from "ethers";
import {
	NotificationContainer,
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";

interface props {
	setUser: Function;
}

function ConnectButton({ setUser }: props) {
	const handleConnect = async () => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			await provider.send("eth_requestAccounts", []);
			const signer = provider.getSigner();
			const pk = await signer.getAddress();
			const userRef = db.collection("users").doc(pk);
			const user = await userRef.get();
			if (user.exists) {
				setUser(user.data());
				sessionStorage.setItem("user", JSON.stringify(user.data()));
			} else {
				const user = {
					key: pk,
					username: pk,
					image: `https://robohash.org/${pk}`,
				};
				db.collection("users").doc(pk).set(user);
				db.collection(`users/${pk}/games`).doc("coinflip").set({
					amount_lost: 0,
					amount_won: 0,
					games_played: 0,
					losses: 0,
					wins: 0,
				});
				db.collection(`users/${pk}/games`).doc("roulette").set({
					amount_lost: 0,
					amount_won: 0,
					games_played: 0,
					losses: 0,
					wins: 0,
				});
				sessionStorage.setItem("user", JSON.stringify(user));
				setUser(user);
			}
		} else {
			NotificationManager.error(
				`You have any wallet installed on you navigator ! Use Metamask for example to connect.`
			);
		}
	};

	return (
		<>
			<NotificationContainer />
			<button
				onClick={handleConnect}
				className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl p-2 font-bold"
			>
				CONNECT WITH METAMASK
			</button>
		</>
	);
}

export default ConnectButton;

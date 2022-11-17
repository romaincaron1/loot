import React, { useState } from "react";
import { db } from "../services/firebase";

interface props {
	setUser: Function;
}

function ConnectButton({ setUser }: props) {

	const handleConnect = async () => {
		setUser({ username: "svein" });
		const pk = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
		const userRef = db.collection("users").doc(pk);
		const user = await userRef.get();
		if (user.exists) {
			setUser(user.data());
		} else {
			db.collection("users").doc(pk).set({
				username: pk,
			});
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

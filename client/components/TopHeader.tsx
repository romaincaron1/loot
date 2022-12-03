import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import {
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import userContext from "../contexts/userContext";
import keyMinifier from "../services/keyMinifier";
import ConnectButton from "./ConnectButton";
import Web3 from "web3";
import EthBalanceText from "./EthBalanceText";

function TopHeader() {
	const { user, setUser } = useContext(userContext);
	const [balance, setBalance] = useState(0);

	// useEffect(() => {
	// 	const fetchBalance = async () => {
	// 		if (window.web3 && user.key) {
	// 			try {
	// 				window.web3 = new Web3(window.ethereum);
	// 				const balance = await window.web3.eth.getBalance(user.key);
	// 				setBalance(parseFloat(Web3.utils.fromWei(balance)));
	// 			} catch (error) {
	// 				console.log(error);
	// 			}
	// 		}
	// 	};
	// 	fetchBalance();
	// }, [user.key]);

	const handleCopy = () => {
		NotificationManager.info("Copied address !");
		navigator.clipboard.writeText(user.key);
	};

	return (
		<header className="w-full h-32 p-8">
			{user.key ? (
				<>
					<div className="flex align-middle justify-between">
						<div className="flex gap-4">
							<div className="w-[100px]">
								<Image
									className="rounded-full"
									src={user.image}
									width={100}
									height={100}
									layout="responsive"
								/>
							</div>
							<div className="flex flex-col self-center">
								<span className="font-bold text-lg mt-2">{user.username.length > 10 ? keyMinifier(user.username) : user.username.toUpperCase()}</span>
								<span className="flex">
									<BsDot className="ml-[-17px] text-green-400" size={40} />{" "}
									<h5 className="self-center font-bold">online</h5>
								</span>
								<span className="flex gap-6">
									<h6 className="self-center text-xs text-[#636363]">
										{keyMinifier(user.key)}
									</h6>
									<IoMdCopy
										onClick={handleCopy}
										className="ml-[-17px] cursor-pointer"
										color="#636363"
										size={20}
									/>
								</span>
							</div>
						</div>
						<div className="self-center flex flex-col gap-2 font-bold text-center">
							<span>BALANCE</span>
							<EthBalanceText balance={balance} />
						</div>
					</div>
				</>
			) : (
				<ConnectButton setUser={setUser} />
			)}
		</header>
	);
}

export default TopHeader;

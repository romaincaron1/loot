import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import React, { useContext, useState } from "react";
import Informations from "../../components/Informations";
import Navbar from "../../components/Navbar";
import {
	NotificationContainer,
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import redCoin from "../../public/red_coin.png";
import blueCoin from "../../public/blue_coin.png";
import TopHeader from "../../components/TopHeader";
import userContext from "../../contexts/userContext";
import CoinflipContract from "../../../artifacts/contracts/Coinflip.sol/Coinflip.json";
import { ethers } from "ethers";

const coinflipContractAddress = "0x53B19d55eeE2022692A5eb117c3D345479d64d80";

function index() {
	const { user } = useContext(userContext);
	const [createGameAmountBet, setCreateGameAmountBet] = useState("");
	const [challengeAmountBet, setChallengeAmountBet] = useState("");
	const [challengeAddress, setChallengeAddress] = useState("");

	const handleCreateGame = async () => {
		if (createGameAmountBet != "") {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				coinflipContractAddress,
				CoinflipContract.abi,
				signer
			);
			try {
				const transaction = await contract.createGame({
					value: ethers.utils.parseEther("0.001"),
				});
				await transaction.wait();
				NotificationManager.success("Game created !");
			} catch (error : any) {
				NotificationManager.success(`Cannot create a game : ${error.message}`);
				console.log(error.message);
			}
		} else {
			NotificationManager.error(
				"You have to enter an amount to create a game!"
			);
		}
	};

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot - Coinflip</title>
			</Head>
			<Informations current="coinflip" />
			<NotificationContainer />
			<div className="parent">
				<Navbar current="coinflip" />
				<div className="div3">
					<TopHeader />
				</div>
				<main className="div4 p-8">
					<div className="m-auto w-full lg:ml-0">
						<div className="flex lg:ml-0 flex-wrap gap-4 justify-center">
							<div className="self-center w-full border-t-2 bg-[#202531] border-[#32394A] rounded-lg pt-4 ml-4 mt-20 overflow-x-auto">
								<div className="flex gap-1 pl-4 pr-4">
									<BsDot className="ml-[-17px] text-blue-400" size={80} />{" "}
									<h1 className="self-center font-bold">History</h1>
								</div>
								<div className="flex flex-col">
									<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div className="py-2 inline-block min-w-full sm:pl-6 lg:px-8">
											<div className="overflow-hidden">
												<table className="min-w-full">
													<thead className="border-b border-t border-[#32394A]">
														<tr>
															<th
																scope="col"
																className="text-sm font-medium  px-6 py-2 text-left"
															>
																BET ID
															</th>
															<th
																scope="col"
																className="text-sm font-medium  px-6 py-2 text-left"
															>
																User address
															</th>
															<th
																scope="col"
																className="text-sm font-medium  px-6 py-2 text-left"
															>
																Opponent Address
															</th>
															<th
																scope="col"
																className="text-sm font-medium  px-6 py-2 text-left"
															>
																Winner
															</th>
															<th
																scope="col"
																className="text-sm font-medium  px-6 py-2 text-left"
															>
																Date
															</th>
														</tr>
													</thead>
													<tbody className="text-[#BEBEBE]">
														<tr className="h-7"></tr>
														<tr className="bg-[#181B23]">
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																#3669
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																22/10/2022 - 18:30
															</td>
														</tr>
														<tr className="bg-[#202531]">
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																#3669
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																22/10/2022 - 18:30
															</td>
														</tr>
														<tr className="bg-[#181B23]">
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																#3669
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																0x996550...A4dc
															</td>
															<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																22/10/2022 - 18:30
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>

				<aside className="div2 bg-[#181b23] p-4 flex flex-col gap-8 pt-36 pb-36">
					<div className="bg-[#202531] flex flex-col gap-3 p-4 rounded-lg border-t-2 border-[#32394A]">
						<input
							className="p-2 pl-4 rounded-full border-none bg-[#252930] text-sm text-[#929292] outline-none font-light"
							type="number"
							value={createGameAmountBet}
							onChange={(e: any) => setCreateGameAmountBet(e.target.value)}
							placeholder="Amount bet (ETH)..."
						/>
						<div className="flex gap-2 justify-between">
							<button
								onClick={() => setCreateGameAmountBet((0.001).toString())}
								className="bg-[#424956]  h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
							>
								0,001
							</button>
							<button
								onClick={() => setCreateGameAmountBet((0.01).toString())}
								className="bg-[#424956]  h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
							>
								0,01
							</button>
							<button
								onClick={() => setCreateGameAmountBet((0.1).toString())}
								className="bg-[#424956]  h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
							>
								0,1
							</button>
						</div>
						<button
							onClick={handleCreateGame}
							className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl pt-2 pb-2 pl-6 pr-6 font-semibold"
						>
							START A GAME
						</button>
					</div>

					<div className="bg-[#202531] flex flex-col gap-3 p-4 rounded-lg border-t-2 border-[#32394A]">
						<input
							className="p-2 pl-4 rounded-full border-none bg-[#252930] text-sm text-[#929292] outline-none font-light"
							type="text"
							value={challengeAddress}
							onChange={(e: any) => setChallengeAddress(e.target.value)}
							placeholder="Address of a player"
						/>
						<input
							className="p-2 pl-4 rounded-full border-none bg-[#252930] text-sm text-[#929292] outline-none font-light"
							type="number"
							value={challengeAmountBet}
							onChange={(e: any) => setChallengeAmountBet(e.target.value)}
							placeholder="Amount bet (ETH)..."
						/>
						<div className="flex gap-2 justify-between">
							<button
								onClick={() => setChallengeAmountBet((0.001).toString())}
								className="bg-[#424956]  h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
							>
								0,001
							</button>
							<button
								onClick={() => setChallengeAmountBet((0.01).toString())}
								className="bg-[#424956]  h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
							>
								0,01
							</button>
							<button
								onClick={() => setChallengeAmountBet((0.1).toString())}
								className="bg-[#424956]  h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
							>
								0,1
							</button>
						</div>
						<button
							onClick={() => NotificationManager.success("Request sended !")}
							className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl pt-2 pb-2 pl-6 pr-6 font-semibold"
						>
							SEND CHALLENGE
						</button>
					</div>
					<div className="self-center w-full  border-t-2 bg-[#202531] border-[#32394A] rounded-lg pt-4 overflow-x-auto">
						<div className="flex gap-2 pl-4 pr-4">
							<BsDot className="ml-[-17px] text-blue-400" size={80} />{" "}
							<h1 className="self-center font-bold">Equivalence</h1>
							<span className="self-center text-xs text-[#888888]">
								(last update 20/10/22)
							</span>
						</div>
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="py-2 inline-block min-w-full sm:pl-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full">
											<thead className="border-b border-t border-[#32394A]">
												<tr>
													<th
														scope="col"
														className="text-sm font-medium  px-6 py-2 text-left"
													>
														ETH
													</th>
													<th
														scope="col"
														className="text-sm font-medium  px-6 py-2 text-left"
													>
														USD
													</th>
													<th
														scope="col"
														className="text-sm font-medium  px-6 py-2 text-left"
													>
														EUR
													</th>
												</tr>
											</thead>
											<tbody className="text-[#BEBEBE]">
												<tr className="h-7"></tr>
												<tr className="bg-[#181B23]">
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														0,001
													</td>
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														1,28
													</td>
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														1,32
													</td>
												</tr>
												<tr className="bg-[#202531]">
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														0,01
													</td>
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														12,85
													</td>
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														13,16
													</td>
												</tr>
												<tr className="bg-[#181B23]">
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														0,1
													</td>
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														128,49
													</td>
													<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
														131,58
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
}

export default index;

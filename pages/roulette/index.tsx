import Head from "next/head";
import React, { useEffect, useState } from "react";
import Informations from "../../components/Informations";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import {
	NotificationContainer,
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import Image from "next/image";
import redcoin from "../../public/red_coin.png";
import bluecoin from "../../public/blue_coin.png";
import goldcoin from "../../public/logo.png";
import { FaEthereum } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

function index() {
	const [connected, setConnected] = useState(false);
	const [redCoinSelected, setRedCoinSelected] = useState(false);
	const [goldCoinSelected, setGoldCoinSelected] = useState(false);
	const [blueCoinSelected, setBlueCoinSelected] = useState(false);
	const [joinGameAmountBet, setJoinGameAmountBet] = useState("");

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot - Coinflip</title>
			</Head>

			<Informations current="roulette" />
			<div className="flex min-h-full">
				<Navbar current="roulette" />
				<div className="w-[calc(100%-5rem)] min-h-screen background lg:flex">
					<NotificationContainer />
					<div>
						<TopHeader connected={connected} setConnected={setConnected} />
						<main className="mt-8">
							<div className="w-full bg-[#181B23] relative pt-2 flex roulette shadow-2xl shadow-[#32394A]">
								<div>
									<Image src={redcoin} width={110} />
								</div>
								<div>
									<Image src={bluecoin} width={110} />
								</div>
								<div>
									<Image src={redcoin} width={110} />
								</div>
								<div>
									<Image src={bluecoin} width={110} />
								</div>
								<div>
									<Image src={goldcoin} width={90} />
								</div>
								<div>
									<Image src={bluecoin} width={110} />
								</div>
								<div>
									<Image src={redcoin} width={110} />
								</div>
								<div>
									<Image src={bluecoin} width={110} />
								</div>
								<div>
									<Image src={redcoin} width={110} />
								</div>
							</div>
							<div className="lg:p-8 p-4 w-full">
								<div className="m-auto w-full lg:ml-0">
									<div className="flex flex-col">
										<h2 className="font-bold text-[1.5rem] tracking-wide mb-8 mt-4">
											STARTING IN 59...
										</h2>
										<div className="flex flex-col justify-between align-middle gap-4 lg:gap-20 lg:flex-row">
											<div className="w-[250px] self-center border-t-2 bg-[#202531] shadow-md border-[#32394A] rounded-2xl">
												<div className="flex justify-between align-middle p-2 pl-4 pr-4 shadow-md rounded-lg shadow-slate-900">
													<Image src={redcoin} width={40} height={40} />
													<p className="self-center font-bold tracking-wide">
														BETS
													</p>
													<p className="self-center font-bold tracking-wide">
														X2
													</p>
												</div>
												<div className="pb-4">
													<div className="flex justify-between mt-4 border-t border-b border-[#32394A] text-[#BEBEBE] font-light mb-4 pr-4 pl-4">
														<p>
															<span className="text-blue-400 font-bold">3</span>{" "}
															Bets Total
														</p>
														<div className="flex gap-2 justify-center">
															<FaEthereum
																className="self-center bg-[#627eea] text-white rounded-full p-1"
																size={20}
															/>
															<span className="self-center">0.12</span>
														</div>
													</div>
													<div className="text-[#BEBEBE]">
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap bg-[#181B23]">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap bg-[#181B23]">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[250px] self-center border-t-2 bg-[#202531] shadow-md border-[#32394A] rounded-2xl">
												<div className="flex justify-between align-middle p-2 pl-4 pr-4 shadow-md rounded-lg shadow-slate-900">
													<Image src={goldcoin} width={30} height={40} />
													<p className="self-center font-bold tracking-wide">
														BETS
													</p>
													<p className="self-center font-bold tracking-wide">
														X2
													</p>
												</div>
												<div className="pb-4">
													<div className="flex justify-between mt-4 border-t border-b border-[#32394A] text-[#BEBEBE] font-light mb-4 pr-4 pl-4">
														<p>
															<span className="text-blue-400 font-bold">3</span>{" "}
															Bets Total
														</p>
														<div className="flex gap-2 justify-center">
															<FaEthereum
																className="self-center bg-[#627eea] text-white rounded-full p-1"
																size={20}
															/>
															<span className="self-center">0.12</span>
														</div>
													</div>
													<div className="text-[#BEBEBE]">
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap bg-[#181B23]">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap bg-[#181B23]">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[250px] self-center border-t-2 bg-[#202531] shadow-md border-[#32394A] rounded-2xl">
												<div className="flex justify-between align-middle p-2 pl-4 pr-4 shadow-md rounded-lg shadow-slate-900">
													<Image src={bluecoin} width={40} height={40} />
													<p className="self-center font-bold tracking-wide">
														BETS
													</p>
													<p className="self-center font-bold tracking-wide">
														X2
													</p>
												</div>
												<div className="pb-4">
													<div className="flex justify-between mt-4 border-t border-b border-[#32394A] text-[#BEBEBE] font-light mb-4 pr-4 pl-4">
														<p>
															<span className="text-blue-400 font-bold">3</span>{" "}
															Bets Total
														</p>
														<div className="flex gap-2 justify-center">
															<FaEthereum
																className="self-center bg-[#627eea] text-white rounded-full p-1"
																size={20}
															/>
															<span className="self-center">0.12</span>
														</div>
													</div>
													<div className="text-[#BEBEBE]">
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap bg-[#181B23]">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
														<div className="text-sm py-2 font-light px-6 flex justify-between whitespace-nowrap bg-[#181B23]">
															<p>0Fx6FD712bcA74c</p>
															<span className="self-center">0.04</span>
														</div>
													</div>
												</div>
											</div>
										</div>
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
																			Date
																		</th>
																		<th
																			scope="col"
																			className="text-sm font-medium  px-6 py-2 text-left"
																		>
																			Winner
																		</th>
																		<th
																			scope="col"
																			className="text-sm font-medium text-center px-6 py-2"
																		>
																			Amount won
																		</th>
																		<th
																			scope="col"
																			className="text-sm font-medium  px-6 py-2 text-center"
																		>
																			Amount lost
																		</th>
																		<th
																			scope="col"
																			className="text-sm font-medium  px-6 py-2 text-center"
																		>
																			Amount bet
																		</th>
																	</tr>
																</thead>
																<tbody className="text-[#BEBEBE] pb-8">
																	<tr className="h-7"></tr>
																	<tr className="bg-[#181B23]">
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			28/10/2022 - 18:30
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<Image
																				src={redcoin}
																				width={30}
																				height={30}
																			/>
																		</td>
																		<td className="text-sm py-2 font-light left-0 px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																	</tr>
																	<tr className="bg-[#202531]">
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			27/10/2022 - 13:59
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<Image
																				src={redcoin}
																				width={30}
																				height={30}
																			/>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																	</tr>
																	<tr className="bg-[#181B23]">
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			27/10/2022 - 10:30
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<Image
																				src={bluecoin}
																				width={30}
																				height={30}
																			/>
																		</td>
																		<td className="text-sm py-2 font-light left-0 px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
																		</td>
																		<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																			<div className="flex gap-2 justify-center">
																				<FaEthereum
																					className="self-center bg-[#627eea] text-white rounded-full p-1"
																					size={20}
																				/>
																				<span className="self-center">
																					0.12
																				</span>
																			</div>
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
							</div>
						</main>
					</div>
					<aside className="bg-[#181B23] lg:w-full lg:min-w-[450px] mt-20 lg:mt-0 lg:pt-40 p-8 flex flex-col gap-16">
						<div className="bg-[#202531] flex flex-col gap-3 p-4 rounded-lg border-t-2 border-[#32394A]">
							<input
								className="p-2 pl-4 rounded-full border-none bg-[#252930] text-sm text-[#929292] outline-none font-light"
								type="number"
								value={joinGameAmountBet}
								onChange={(e: any) => setJoinGameAmountBet(e.target.value)}
								placeholder="Amount bet (ETH)..."
							/>
							<div className="flex gap-2 justify-evenly">
								<Image
									className={`opacity-60 cursor-pointer ${
										redCoinSelected ? "opacity-100" : ""
									}`}
									src={redcoin}
									width={40}
									height={40}
									onClick={() => {
										setRedCoinSelected(!redCoinSelected);
										setGoldCoinSelected(false);
										setBlueCoinSelected(false);
									}}
								/>
								<Image
									className={`opacity-60 cursor-pointer ${
										goldCoinSelected ? "opacity-100" : ""
									}`}
									src={goldcoin}
									width={30}
									height={40}
									onClick={() => {
										setGoldCoinSelected(!goldCoinSelected);
										setRedCoinSelected(false);
										setBlueCoinSelected(false);
									}}
								/>
								<Image
									className={`opacity-60 cursor-pointer ${
										blueCoinSelected ? "opacity-100" : ""
									}`}
									src={bluecoin}
									width={40}
									height={40}
									onClick={() => {
										setBlueCoinSelected(!blueCoinSelected);
										setRedCoinSelected(false);
										setGoldCoinSelected(false);
									}}
								/>
							</div>
							<div className="flex gap-2 justify-between">
								<button
									onClick={() => setJoinGameAmountBet((0.001).toString())}
									className="bg-[#424956] w-28 h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
								>
									0,001 ETH
								</button>
								<button
									onClick={() => setJoinGameAmountBet((0.01).toString())}
									className="bg-[#424956] w-28 h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
								>
									0,01 ETH
								</button>
								<button
									onClick={() => setJoinGameAmountBet((0.1).toString())}
									className="bg-[#424956] w-28 h-9 rounded-3xl p-2 pr-4 pl-4 font-semibold text-sm hover:opacity-70 transition"
								>
									0,1 ETH
								</button>
							</div>
							<button
								onClick={() =>
									NotificationManager.success("You joined the game !")
								}
								className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl pt-2 pb-2 pl-6 pr-6 font-semibold"
							>
								JOIN
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
		</div>
	);
}

export default index;

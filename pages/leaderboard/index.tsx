import Head from "next/head";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";

function Leaderboard() {
	const [connected, setConnected] = useState(false);

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot - Notification</title>
			</Head>
			<div className="flex min-h-full">
				<Navbar current="leaderboard" />
				<main className="w-[calc(100%-5rem)] min-h-screen lg:flex lg:flex-col background">
					<TopHeader connected={connected} setConnected={setConnected} />
					<div className="p-8">
						<div className="self-center w-full border-t-2 bg-[#202531] border-[#32394A] rounded-lg pt-4 ml-4 mt-20 overflow-x-auto">
							<div className="flex gap-1 pl-4 pr-4">
								<BsDot className="ml-[-17px] text-blue-400" size={80} />{" "}
								<h1 className="self-center font-bold">Coinflip</h1>
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
															#
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Player address
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Wins
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Amount won
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Games played
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Winrate
														</th>
													</tr>
												</thead>
												<tbody className="text-[#BEBEBE]">
													<tr className="h-7"></tr>
													<tr className="bg-[#181B23]">
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															1
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															0x996550...A4dc
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															129
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															<div className="flex gap-2">
																<FaEthereum
																	className="bg-[#627eea] text-white rounded-full p-1"
																	size={20}
																/>
																<span className="">0.12</span>
															</div>
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															251
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															54%
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="self-center w-full border-t-2 bg-[#202531] border-[#32394A] rounded-lg pt-4 ml-4 mt-20 overflow-x-auto">
							<div className="flex gap-1 pl-4 pr-4">
								<BsDot className="ml-[-17px] text-blue-400" size={80} />{" "}
								<h1 className="self-center font-bold">Roulette</h1>
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
															#
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Player address
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Wins
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Amount won
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Games played
														</th>
														<th
															scope="col"
															className="text-sm font-medium  px-6 py-2 text-left"
														>
															Winrate
														</th>
													</tr>
												</thead>
												<tbody className="text-[#BEBEBE]">
													<tr className="h-7"></tr>
													<tr className="bg-[#181B23]">
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															1
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															0x996550...A4dc
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															129
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															<div className="flex gap-2">
																<FaEthereum
																	className="bg-[#627eea] text-white rounded-full p-1"
																	size={20}
																/>
																<span className="">0.12</span>
															</div>
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															251
														</td>
														<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
															54%
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
				</main>
			</div>
		</div>
	);
}

export default Leaderboard;

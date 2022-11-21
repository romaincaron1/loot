import Head from "next/head";
import React, { useContext } from "react";
import Informations from "../../components/Informations";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import userContext from "../../contexts/userContext";
import {
	NotificationContainer,
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { FaEthereum } from "react-icons/fa";
import { BsDot, BsPercent } from "react-icons/bs";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { IoIosTrendingUp, IoLogoGameControllerB, IoMdTrendingDown } from "react-icons/io";
import EthBalanceText from "../../components/EthBalanceText";

Chart.register(ArcElement);

function Profile() {
	const { user } = useContext(userContext);

	const data = {
		labels: ["Red", "Blue"],
		datasets: [
			{
				borderWidth: 1,
				label: "My First Dataset",
				data: [50, 50],
				backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
				hoverOffset: 1,
			},
		],
	};

	if (user.key) {
		return (
			<div className="min-h-screen">
				<Head>
					<title>Loot - Profile</title>
				</Head>
				<Informations current="profile" />
				<div className="parent">
					<Navbar current="profile" />
					<div className="div3">
						<TopHeader />
					</div>
					<div className="div4 p-8">
						<div className="flex flex-col m-auto p-8 w-full lg:ml-0">
							<div className="flex flex-col gap-4 lg:flex-row">
								<div className="self-center w-full border-t-2 bg-[#202531] h-[325px] p-4 flex flex-col align-middle justify-center border-[#32394A] rounded-lg pt-4 ml-4 mt-20 overflow-x-auto">
									<h2 className="self-center font-bold mb-2 mt-4">
										Games played parity
									</h2>
									<Doughnut
										className="self-center mb-4"
										data={data}
										options={{
											responsive: true,
											maintainAspectRatio: true,
										}}
									/>
								</div>
								<div className="self-center  w-full border-t-2 bg-[#202531] border-[#32394A] rounded-lg pt-4 ml-4 mt-20 overflow-x-auto">
									<div className="flex gap-1 pl-4 pr-4">
										<BsDot className="ml-[-17px] text-blue-400" size={80} />{" "}
										<h1 className="self-center font-bold">Coinflip History</h1>
									</div>
									<div className="flex flex-col">
										<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
											<div className="py-2 inline-block min-w-full sm:pl-6">
												<div className="overflow-hidden">
													<table className="min-w-full">
														<thead className="border-b border-t border-[#32394A]">
															<tr>
																<th
																	scope="col"
																	className="text-sm font-medium  px-6 py-2 text-left"
																>
																	Win/Loss
																</th>
																<th
																	scope="col"
																	className="text-sm font-medium  px-1 py-2 text-left"
																>
																	Amount Bet
																</th>
																<th
																	scope="col"
																	className="text-sm font-medium  px-1 py-2 text-left"
																>
																	Amount won/lost
																</th>
															</tr>
														</thead>
														<tbody className="text-[#BEBEBE]">
															<tr className="h-7"></tr>
															<tr className="bg-[#181B23]">
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Win
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">0.24</span>
																	</div>
																</td>
															</tr>
															<tr>
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Win
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">0.24</span>
																	</div>
																</td>
															</tr>
															<tr className="bg-[#181B23]">
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Loss
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">-0.12</span>
																	</div>
																</td>
															</tr>
															<tr>
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Win
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">0.24</span>
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
							<div className="flex flex-col gap-4 lg:flex-row">
								<div className="pt-4 ml-4 mt-20 w-1/2 h-[345px] flex flex-col gap-8">
									<div className="flex gap-8 h-1/2">
										<div className="rounded bg-[#BC7373] w-1/2 flex flex-col justify-evenly p-4">
											<IoLogoGameControllerB size={40} />
											<p className="text-[#D7D7D7] mt-[-10px] tracking-wide font-extralight">
												games played
											</p>
											<span className="font-bold text-xl">123</span>
										</div>
										<div className="rounded bg-[#A073BC] w-1/2 flex flex-col justify-evenly p-4">
											<BsPercent size={40} />
											<p className="text-[#D7D7D7] mt-[-10px] tracking-wide font-extralight">
												winrate
											</p>
											<span className="font-bold text-xl">54.7</span>
										</div>
									</div>
									<div className="flex gap-8 h-1/2">
										<div className="rounded bg-[#737ABC] w-1/2 flex flex-col justify-evenly p-4">
											<IoIosTrendingUp size={40} />
											<p className="text-[#D7D7D7] mt-[-10px] tracking-wide font-extralight">
												amount won
											</p>
											<EthBalanceText balance="1.2" />
										</div>
										<div className="rounded bg-[#73BC88] w-1/2 flex flex-col justify-evenly p-4">
											<IoMdTrendingDown size={40} />
											<p className="text-[#D7D7D7] mt-[-10px] tracking-wide font-extralight">
												amount lost
											</p>
											<EthBalanceText balance="1.2" />
										</div>
									</div>
								</div>
								<div className="self-center w-1/2 border-t-2 bg-[#202531] border-[#32394A] rounded-lg pt-4 ml-4 mt-20 overflow-x-auto">
									<div className="flex gap-1 pl-4 pr-4">
										<BsDot className="ml-[-17px] text-blue-400" size={80} />{" "}
										<h1 className="self-center font-bold">Roulette History</h1>
									</div>
									<div className="flex flex-col">
										<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
											<div className="py-2 inline-block min-w-full sm:pl-6">
												<div className="overflow-hidden">
													<table className="min-w-full">
														<thead className="border-b border-t border-[#32394A]">
															<tr>
																<th
																	scope="col"
																	className="text-sm font-medium  px-6 py-2 text-left"
																>
																	Win/Loss
																</th>
																<th
																	scope="col"
																	className="text-sm font-medium  px-1 py-2 text-left"
																>
																	Amount Bet
																</th>
																<th
																	scope="col"
																	className="text-sm font-medium  px-1 py-2 text-left"
																>
																	Amount won/lost
																</th>
															</tr>
														</thead>
														<tbody className="text-[#BEBEBE]">
															<tr className="h-7"></tr>
															<tr className="bg-[#181B23]">
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Win
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">0.24</span>
																	</div>
																</td>
															</tr>
															<tr>
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Win
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">0.24</span>
																	</div>
																</td>
															</tr>
															<tr className="bg-[#181B23]">
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Loss
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">-0.12</span>
																	</div>
																</td>
															</tr>
															<tr>
																<td className="text-sm py-2 font-light px-6 whitespace-nowrap">
																	Win
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
																	<div className="flex gap-2">
																		<FaEthereum
																			className="bg-[#627eea] text-white rounded-full p-1"
																			size={20}
																		/>
																		<span className="">0.24</span>
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
							<div className="flex"></div>
						</div>
					</div>

					<aside className="div2 bg-[#181b23]"></aside>
				</div>
			</div>
		);
	} else {
		return <div>disconnected</div>;
	}
}

export default Profile;

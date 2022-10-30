import Head from "next/head";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";

function index() {
	const [connected, setConnected] = useState(false);

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot - Notification</title>
			</Head>
			<div className="flex min-h-full">
				<Navbar current="notifications" />
				<main className="w-[calc(100%-5rem)] min-h-screen lg:flex lg:flex-col background">
					<TopHeader connected={connected} setConnected={setConnected} />
					<div className="p-8 pl-2 pt-0">
						<div className="flex gap-1">
							<BsDot className="text-blue-400" size={60} />{" "}
							<h1 className="self-center font-bold text-lg">Notifications</h1>
						</div>
						<div className="pl-6 mt-4">
							{/* <p className="font-semibold text-[#BEBEBE]">
								You got 0 notification.
							</p> */}
							<div className="border-t-2 bg-[#202531] border-[#32394A] rounded-lg p-4 text-center lg:w-[350px]">
								<h1 className="font-bold">0Fx6FD712bcA74c</h1>
								<p className="text-[#BEBEBE]">
									Invited you to play a coinflip game
								</p>
								<div className="bg-[#32394A] mt-2 rounded-sm pt-3 pb-3">
									<div className="flex gap-2 justify-center mb-4">
										<FaEthereum
											className="self-center bg-[#627eea] rounded-full p-1"
											size={20}
										/>
										<span className="self-center font-bold">0.12</span>
									</div>
									<button className="bg-[#FE881A] hover:opacity-90 transition text-sm lg:text-lg rounded-3xl pt-2 pb-2 pl-6 pr-6 font-bold">
										ACCEPT
									</button>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default index;

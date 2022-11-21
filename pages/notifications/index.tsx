import Head from "next/head";
import React from "react";
import { FaEthereum } from "react-icons/fa";
import Informations from "../../components/Informations";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";

function index() {

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot - Coinflip</title>
			</Head>
			<Informations current="notifications" />
			<div className="parent">
				<Navbar current="notifications" />
				<div className="div3">
					<TopHeader />
				</div>
				<div className="div4 p-8">
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

				<aside className="div2 bg-[#181b23]"></aside>
			</div>
		</div>
	);
}

export default index;

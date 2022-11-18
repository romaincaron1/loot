import Image from "next/image";
import React from "react";
import pfp from "../public/pfp.png";
import { BsDot } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";
import {
	NotificationContainer,
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";
interface props {
	user: {
		username: string;
	};
}

function ConnectedHome({ user }: props) {
	const handleCopy = () => {
		NotificationManager.info("Copied address !");
		navigator.clipboard.writeText("0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc");
	};

	// TODO: global function public key => xxxx...xxxx
	// TODO: add db fields (subcollection per game => wins, loss, ... )

	return (
		<div className="w-full md:w-[500px]">
			<NotificationContainer />
			<ul className="w-full flex justify-center pt-10 gap-4 mr-4 text-xs font-bold tracking-wide">
				<a href="/about" className="hover:opacity-90 transition">
					ABOUT US
				</a>
				<a href="/fairness" className="hover:opacity-90 transition">
					FAIRNESS
				</a>
				<a
					href="https://github.com/romaincaron1/loot"
					target="_blank"
					className="hover:opacity-90 transition"
				>
					GITHUB
				</a>
			</ul>
			<div className="w-full mt-36 flex justify-center align-middle">
				<div className="max-w-[400px] p-4 flex flex-col gap-6">
					<div className="flex gap-4">
						<div className="w-[100px]">
							<Image className="rounded-full" src={pfp} layout="responsive" />
						</div>
						<div className="flex flex-col self-end">
							<span className="flex">
								<BsDot className="ml-[-17px] text-green-400" size={40} />{" "}
								<h5 className="self-center font-bold">online</h5>
							</span>
							<span className="flex gap-6">
								<h6 className="self-center text-xs text-[#636363]">
									0x99655...
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
					<h1 className="font-bold text-[2rem]">
						WELCOME BACK <br />
						<span className="text-[#FE881A]">{user.username.toUpperCase()}</span>.
					</h1>
					<button className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl p-2 font-bold">
						MY PROFILE
					</button>
				</div>
			</div>
		</div>
	);
}

export default ConnectedHome;

import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import {
	NotificationContainer,
	NotificationManager,
	// @ts-ignore
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import pfp from "../public/pfp.png";

interface props {
	connected: any;
	setConnected: any;
}

function TopHeader({ connected, setConnected }: props) {
	const handleCopy = () => {
		NotificationManager.info("Copied address !");
		navigator.clipboard.writeText("0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc");
	};

	return (
		<header className="w-full h-32 p-8">
			{connected ? (
				<>
					<div className="flex align-middle justify-between">
						<div className="flex gap-4">
							<div className="w-[100px]">
								<Image className="rounded-full" src={pfp} layout="responsive" />
							</div>
							<div className="flex flex-col self-center">
								<span className="font-bold text-lg mt-2">SVEIN</span>
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
						<div className="self-center flex flex-col gap-2 font-bold text-center">
							<span>BALANCE</span>
							<div className="flex gap-2">
								<FaEthereum
									className="self-center bg-[#627eea] rounded-full p-1"
									size={25}
								/>
								<span className="self-center">2,381.22</span>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<button
						onClick={() => setConnected(true)}
						className="bg-[#FE881A] hover:opacity-90 transition text-sm lg:text-lg rounded-3xl pt-2 pb-2 pl-6 pr-6 font-bold"
					>
						CONNECT WITH METAMASK
					</button>
				</>
			)}
		</header>
	);
}

export default TopHeader;

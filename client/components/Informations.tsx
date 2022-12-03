import React, { useEffect, useState } from "react";
import { MdDashboard, MdLeaderboard } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";
import { TbSportBillard } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

interface props {
	current:
		| "home"
		| "coinflip"
		| "roulette"
		| "leaderboard"
		| "notifications"
		| "profile";
}

function Informations({ current }: props) {
	const [hour, setHour] = useState(0);
	const [minutes, setMinutes] = useState(0);

	useEffect(() => {
		const date = new Date();
		setHour(date.getHours());
		setMinutes(date.getMinutes());
		setInterval(() => {
			const date = new Date();
			setHour(date.getHours());
			setMinutes(date.getMinutes());
		}, 1000);
	}, []);

	return (
		<div className="hidden lg:block">
			<div className="bg-[#424956] absolute top-4 right-4 h-16 pr-4 pl-4 rounded-lg flex align-middle gap-2 font-bold">
				<span className="self-center">
					{hour}:{minutes.toString().length > 1 ? minutes : `0${minutes}`}
				</span>
				<span className="text-[#FE881A] self-center">|</span>
				<span className="self-center">LOOT</span>
			</div>
			<div className="bg-[#424956] absolute top-4 right-44 h-16 pr-4 pl-4 rounded-lg flex gap-2 font-bold">
				{current === "home" ? (
					<MdDashboard
						className="text-white self-center bg-blue-500 rounded-full p-2"
						size={35}
					/>
				) : null}
				{current === "coinflip" ? (
					<RiSwordFill
						className="text-white self-center bg-blue-500 rounded-full p-2"
						size={35}
					/>
				) : null}
				{current === "roulette" ? (
					<TbSportBillard
						className="text-white self-center bg-blue-500 rounded-full p-2"
						size={35}
					/>
				) : null}
				{current === "profile" ? (
					<FaUserCircle
						className="text-white self-center bg-blue-500 rounded-full p-2"
						size={35}
					/>
				) : null}
				{current === "leaderboard" ? (
					<MdLeaderboard
						className="text-white self-center bg-blue-500 rounded-full p-2"
						size={35}
					/>
				) : null}
				{current === "notifications" ? (
					<IoMdNotifications
						className="text-white self-center bg-blue-500 rounded-full p-2"
						size={35}
					/>
				) : null}
			</div>
		</div>
	);
}

export default Informations;

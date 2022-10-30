import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../public/logo.png";
import { MdDashboard, MdLeaderboard, MdSettings } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { TbSportBillard } from "react-icons/tb";

interface props {
	current: "home" | "coinflip" | "roulette" | "leaderboard" | "notifications";
}

function Navbar({ current }: props) {
	const [modalOpenned, setModalOpenned] = useState(false);
	const [notificationChecked, setNotificationChecked] = useState(true);
	const wrapperRef: React.RefObject<HTMLInputElement> = useRef(null);

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setModalOpenned(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef]);

	return (
		<div className="pr-20">
			<div className="bg-[#181B23] fixed h-screen max-h-screen w-20 pl-4 pr-4 flex flex-col justify-between">
				<div className="flex justify-center mt-4">
					<Image src={logo} height="68" width="55" />
				</div>
				<div className="flex align-middle justify-center flex-col w-full gap-4 mt-16">
					<MdDashboard
						onClick={() => {
							window.location.href = "/";
						}}
						className={`text-white self-center hover:cursor-pointer ${
							current === "home" ? "bg-blue-500 rounded-full p-2" : ""
						}`}
						size={current === "home" ? 50 : 35}
					/>
					<RiSwordFill
						onClick={() => {
							window.location.href = "/coinflip";
						}}
						className={`text-white self-center hover:cursor-pointer ${
							current === "coinflip" ? "bg-blue-500 rounded-full p-2" : ""
						}`}
						size={current === "coinflip" ? 50 : 35}
					/>
					<TbSportBillard
						onClick={() => {
							window.location.href = "/roulette";
						}}
						className={`text-white self-center hover:cursor-pointer ${
							current === "roulette" ? "bg-blue-500 rounded-full p-2" : ""
						}`}
						size={current === "roulette" ? 50 : 40}
					/>
					<IoMdNotifications
						onClick={() => {
							window.location.href = "/notifications";
						}}
						className={`text-white self-center hover:cursor-pointer ${
							current === "notifications" ? "bg-blue-500 rounded-full p-2" : ""
						}`}
						size={current === "notifications" ? 50 : 35}
					/>
					<MdLeaderboard
						onClick={() => {
							window.location.href = "/leaderboard";
						}}
						className={`text-white self-center hover:cursor-pointer ${
							current === "leaderboard" ? "bg-blue-500 rounded-full p-2" : ""
						}`}
						size={current === "leaderboard" ? 50 : 35}
					/>
				</div>
				<div className="flex align-middle justify-center flex-col w-full mt-20 mb-4">
					<MdSettings
						onClick={() => setModalOpenned(!modalOpenned)}
						className="text-white self-center cursor-pointer"
						size={35}
					/>
				</div>

				<div
					className={`${
						modalOpenned ? null : "hidden"
					} fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40`}
				>
					<div
						ref={wrapperRef}
						className="mt-48 mb-4 mr-auto ml-auto h-[400px] p-8 w-80 bg-[#181B23]"
					>
						<span
							onClick={() => setModalOpenned(!modalOpenned)}
							className="float-right hover:opacity-50 hover:cursor-pointer"
						>
							&times;
						</span>
						<h3 className="font-semibold">Settings</h3>
						<hr className="border-[#636363] mt-4 mb-4" />
						<div className="flex justify-between mb-4">
							<label className="font-semibold text-sm flex gap-4">
								<IoMdNotifications size={40} />
								<span className="self-center">Notifications</span>
							</label>

							<input
								checked={notificationChecked}
								type="checkbox"
								onChange={() => setNotificationChecked(!notificationChecked)}
								className="self-center w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
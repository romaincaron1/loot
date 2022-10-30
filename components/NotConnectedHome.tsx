import React from "react";

function NotConnectedHome({ setConnected } : any) {
	return (
		<div className="w-full md:w-[500px]">
			<ul className="w-full flex justify-center pt-10 gap-4 mr-4 text-xs font-bold tracking-wide">
				<a href="/about" className="hover:opacity-90 transition">
					ABOUT US
				</a>
				<a href="/fairness" className="hover:opacity-90 transition">
					FAIRNESS
				</a>
				<a href="https://github.com/romaincaron1/loot" target="_blank" className="hover:opacity-90 transition">
					GITHUB
				</a>
			</ul>
			<div className="w-full mt-36 flex justify-center align-middle">
				<div className="max-w-[400px] p-4 flex flex-col gap-6">
					<h1 className="font-bold text-[2rem]">
						THE BEST CASINO <br /> EXPERIENCE <br /> WITH{" "}
						<span className="text-[#FE881A]">LOOT</span>.
					</h1>
					<h4 className="text-md font-extralight tracking-wide">
						Connect with metamask and start playing <br /> our games to earn
						crypto !
					</h4>
					<button onClick={() => setConnected(true)} className="bg-[#FE881A] hover:opacity-90 transition rounded-3xl p-2 font-bold">
						CONNECT WITH METAMASK
					</button>
				</div>
			</div>
		</div>
	);
}

export default NotConnectedHome;

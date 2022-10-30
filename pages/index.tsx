import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ConnectedHome from "../components/ConnectedHome";
import Informations from "../components/Informations";
import Navbar from "../components/Navbar";
import NotConnectedHome from "../components/NotConnectedHome";
import background from "../public/background.png";

const Home: NextPage = () => {
	const [connected, setConnected] = useState(false);

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex min-h-full">
				<Navbar current="home" />
				{connected ? <ConnectedHome /> : <NotConnectedHome setConnected={setConnected} />}
				<div className="hidden md:block md:h-screen md:w-full relative">
					<Image src={background} layout="fill" objectFit="cover" />
				</div>
				<Informations current="home" />
			</div>
		</div>
	);
};

export default Home;

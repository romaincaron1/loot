import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ConnectedHome from "../components/ConnectedHome";
import Informations from "../components/Informations";
import Navbar from "../components/Navbar";
import NotConnectedHome from "../components/NotConnectedHome";
import background from "../public/background.png";
import userContext from "../contexts/userContext";

const Home: NextPage = () => {
	const { user, setUser } = useContext(userContext);

	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex min-h-full relative">
				<Navbar current="home" />
				{user.username ? (
					<ConnectedHome user={user} />
				) : (
					<NotConnectedHome setUser={setUser} />
				)}
				<div className="hidden md:block md:h-screen md:w-full relative">
					<Image src={background} layout="fill" objectFit="cover" />
				</div>
				<Informations current="home" />
			</div>
		</div>
	);
};

export default Home;

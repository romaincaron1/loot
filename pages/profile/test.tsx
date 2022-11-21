import Head from "next/head";
import React from "react";
import Informations from "../../components/Informations";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";

function test() {
	return (
		<div className="min-h-screen">
			<Head>
				<title>Loot - Coinflip</title>
			</Head>
			<Informations current="home" />
			<div className="parent">
				<Navbar current="home" />
				<div className="div3">
					<TopHeader />
				</div>
				<div className="div4 p-8">
					
				</div>

				<aside className="div2 bg-[#181b23]">

				</aside>
			</div>
		</div>
	);
}

export default test;

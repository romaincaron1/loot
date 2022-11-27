import React from "react";
import { FaEthereum } from "react-icons/fa";

interface props {
    balance: number
}

function EthBalanceText({ balance }: props) {
	return (
		<div className="flex gap-2">
			<FaEthereum
				className="self-center bg-[#627eea] rounded-full p-1"
				size={25}
			/>
			<span className="self-center">{balance}</span>
		</div>
	);
}

export default EthBalanceText;

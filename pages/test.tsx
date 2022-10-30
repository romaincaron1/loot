import React from "react";
import Image from "next/image";
import logoLink from "../public/background.png";
import { MdLocationCity } from "react-icons/md";
import Link from "next/link";

function test(props: any) {
	const image = !(props.non ?? false) && (
		<Image
			src={logoLink}
			width={100}
			// layout='responsive'
			objectFit="contain"
			height={100}
			// objectFit="contain"
		/>
	);

	return (
		<div className="my-1 mx-2">
			<Link href={"/"}>
				<div className="card h-full cursor-pointer flex flex-row lg:flex-col items-center">
					<Image
						src={logoLink}
						layout="fill" objectFit="cover"
					/>
					<div className={"flex flex-col ml-5 top-8 lg:ml-0 absolute"}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
							recusandae sint eum atque est, cupiditate nostrum, quam culpa
							neque sequi magnam vel labore eligendi quaerat, omnis voluptatibus
							facilis incidunt. Nam!
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default test;

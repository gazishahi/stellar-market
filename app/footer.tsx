import React from "react";

function Footer() {
	return (
		<>
			<div className="bg-black h-1/2 sm:h-2/3 lg:h-1/4 w-full flex md:flex-row flex-col justify-around items-start p-20 static bottom-0">
				<div className="p-5 ">
					<ul>
						<p className="text-neutral-300 font-bold text-3xl pb-0">
							Stellar<span className="text-blue-600">Market</span>
						</p>
						<div className="flex gap-6 pb-1">
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-blue-500 font-bold text-2xl pb-4">Product</p>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Electronics
						</li>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Clothing
						</li>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Sports
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-blue-500 font-bold text-2xl pb-4">Company</p>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-blue-500 font-bold text-2xl pb-4">Support</p>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact Us
						</li>
						<li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
                        <li className="text-neutral-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							(347)123-4567
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-5 bg-black">
				<h1 className=" text-gray-400 font-semibold text-sm">
					© 2023 All rights reserved | Built by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						StellarMarket Team{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;
import React from "react";
import ProductsList from "./ProductsList";


const Recent = () => {
	return (
		<div className="px-[50px] flex flex-col gap-10 mt-10 items-center">
			<h2 className="font-bold text-[#c0a71be3] text-2xl py-8 mb-4">
				Our Recent Products
			</h2>
			<ProductsList />
		</div>
	);
};

export default Recent;

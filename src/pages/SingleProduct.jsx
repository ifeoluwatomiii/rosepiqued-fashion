import React from "react";
import productsState from "../atoms/productsAtom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
	const { productId } = useParams();
	const products = useRecoilValue(productsState);

	let singleProduct;
	if (products.length > 1) {
		singleProduct = products.find((product) => product.id == productId);
	} else {
		console.log("No products found");
	}

	console.log(singleProduct);

	console.log(products);
	return (
		<div className="h-[100vh] flex items-center justify-center py-4 gap-8 flex-col px-4 xl:flex-row container max-w-[1200px] mx-auto">
			<div className="shadow-md shadow-slate-200 bg-[#F2F2F2] rounded mt-4 w-1/2 flex items-center justify-center py-4 px-4">
				<img
					className="transition transform hover:scale-110 duration-500 ease-in-out"
					src={singleProduct.image}
					alt=""
				/>
			</div>
			<div className="flex flex-col w-1/2 ">
				<h4 className="md:text-[15px] text-[13px] mt-2 text-black/60">
					${singleProduct?.price}
				</h4>
				<h4 className="font-bold md:text-[17px] text-[12px] mt-4  underline underline-offset-8 decoration-slate-400">
					{singleProduct?.title}
				</h4>

				<p className="mt-4  underline underline-offset-8 decoration-slate-400">{singleProduct.category}</p>

				<p className="mt-4 ">
					{" "}
					<span className="font-bold underline underline-offset-4 decoration-slate-400"> Description:</span> <br />
					{singleProduct.description}
				</p>
				<button className="bg-[#c0a71be3] md:py-2 md:px-2 rounded-lg mt-4 text-[14px] px-4 py-2 md:text-[15px] w-[50%]">
					Buy
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;

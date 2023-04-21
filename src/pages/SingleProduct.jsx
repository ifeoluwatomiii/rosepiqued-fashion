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
		<div className=" flex items-center justify-center pt-[130px] py-[100px] gap-8 flex-col px-4 xl:flex-row xl:container xl:max-w-[1200px] xl:mx-auto">
			<div className="shadow-md shadow-slate-200 bg-[#F2F2F2] rounded mt-4 xl:w-1/2 flex items-center justify-center py-4 px-4">
				<img
					className="transition transform hover:scale-110 duration-500 ease-in-out"
					src={singleProduct?.image}
					alt=""
				/>
			</div>
			<div className="flex flex-col xl:w-1/2 ">
				<h4 className="md:text-[23px] text-[19px] font-bold mt-2 text-black/60">
					${singleProduct?.price}
				</h4>
				<h4 className="font-bold md:text-[27px] text-[25px] mt-4  underline underline-offset-8 decoration-slate-400">
					{singleProduct?.title}
				</h4>

				<p className="mt-4  underline underline-offset-8 decoration-slate-400">{singleProduct?.category}</p>

				<p className="mt-4 ">
					{" "}
					<span className="font-bold underline underline-offset-4 decoration-slate-400"> Description:</span> <br />
					{singleProduct?.description}
				</p>
				<button className="bg-[#c0a71be3] md:py-2 md:px-2 rounded-lg mt-12 text-[14px] px-4 py-2 md:text-[15px] w-[50%] ">
					Buy
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;

import React from "react";
import lady from "../assets/open.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRecoilValue } from "recoil";
import cartState from "../atoms/cartStateAtom";

const Hero = () => {
	const cart = useRecoilValue(cartState);
	return (
		<div className="font-manrope flex flex-col justify-center items-center gap-10 relative md:flex-row bg-black/5 pt-28 pb-2">
			<div className="md:w-[50%] z-10 py-8 md:mb-[22px] px-4 ">
				<h1 className="text-black font-bold text-4xl mb-4 md:mb-2">
				Introducing Rosepiqued - your one-stop online store!
				</h1>
				<p className="mb-4 py-4 text-xl">
				Whether you're looking for the latest fashion trends, <br />
				home decor, electronics, we've got you covered.
				</p>
				<button className="bg-[#c0a71be3] py-2 px-4 rounded-lg">
					Check More
				</button>
			</div>

			<div className="md:w-[50%] px-4 py-2 ">
				<img className="w-[100%]" src={lady} alt="" />
			</div>
		</div>
	);
};

export default Hero;

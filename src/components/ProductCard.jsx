import React from "react";
import { useRecoilState } from "recoil";
import cartState from "../atoms/cartStateAtom";
import { CiHeart } from "react-icons/ci";
import wishListState from "../atoms/wishListAtom";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const ProductCard = ({ ...product }) => {
	const [cart, setCart] = useRecoilState(cartState);
	const [wishList, setWishList] = useRecoilState(wishListState);
	const [isClicked, setIsClicked] = useState(false);

	const handleAddtoCart = (product) => {
		const alreadyAdded = cart.find((item) => item.id == product.id);
		if (alreadyAdded) {
			setCart(
				cart.map((item) =>
					item.id == product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	const handleAddToWishList = (product) => {
		setWishList([...wishList, product]);
	};

	const handleRemoveFromWishList = (product) => {
		setWishList(wishList.filter((items) => items.id !== product.id));
		setIsClicked(false);
	};

	console.log(cart);
	console.log(isClicked);

	return (
		<div className="xl:px-12 pb-8 flex flex-col items-start">
			<img
				src={product.image}
				className="md:w-[200px] md:h-[200px] object-contain mb-4 w-full h-[200px] self-start"
			/>
			<h3 className="font-bold md:text-[17px] text-[12px]">{product.title}</h3>
			<h5 className="md:text-[15px] text-[10px] text-black/60">${product.price}</h5>
			<div className="flex items-center gap-4 w-full">
				<button
					className="bg-[#c0a71be3] md:py-2 md:px-4 rounded-lg mt-8 text-[14px] px-8 py-4 md:text-[15px] w-[80%]"
					onClick={() => {
						handleAddtoCart(product);
					}}>
					Add to Cart
				</button>
				{isClicked ? (
					<BsHeartFill
						className=" mt-8 cursor-pointer text-red-600 md:text-[20px] text-3xl "
						onClick={() => {
							handleRemoveFromWishList(product);
						}}
					/>
				) : (
					<CiHeart
						className="md:text-2xl text-4xl mt-8 cursor-pointer "
						onClick={() => {
							handleAddToWishList(product);
							setIsClicked(true);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default ProductCard;

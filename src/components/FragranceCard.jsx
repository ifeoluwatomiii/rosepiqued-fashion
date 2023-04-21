import React from "react";
import { useRecoilState } from "recoil";
import cartState from "../atoms/cartStateAtom";
import { CiHeart } from "react-icons/ci";
import wishListState from "../atoms/wishListAtom";
import { useState } from "react";
import { BsHeartFill, BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FragranceCard = ({ ...product }) => {
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
		<div className="xl:px-12 pb-8 flex flex-col items-start px-4 py-4">
			<div className="flex items-center">
			<img
				src={product.image}
				className="md:w-[200px] w-[130px] md:h-[200px] object-contain mb-4 h-[200px] self-start"
			/>
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
			
			<h3 className="font-bold md:text-[17px] text-[12px]">{product.title}</h3>
			<h5 className="md:text-[15px] text-[13px] mt-2 text-black/60">
				${product.price}
			</h5>
			<p>{product.category}</p>
			<div className="flex items-center gap-4 w-full mt-8">
				<button
					className="flex  items-center w-[50%] gap-2 hover:animate-pulse"
					onClick={() => {
						handleAddtoCart(product);
					}}>
					<BsFillCartPlusFill />
					Cart
				</button>
				<Link
					to={`/products/${product.id}`}
					className="bg-[#c0a71be3] md:py-2 md:px-2 rounded-lg  text-[14px] px-4 py-2 md:text-[15px] w-[50%] text-center">
					View
				</Link>
			</div>
		</div>
	);
};

export default FragranceCard;

import React from "react";
import logo from "../assets/rosepiquedlogo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useRecoilValue, useRecoilState } from "recoil";
import cartState from "../atoms/cartStateAtom";
import SideBarCart from "./SideBarCart";
import sideBarCartState from "../atoms/sideBarCartAtom";
import wishListState from "../atoms/wishListAtom";
//import WishList from "./WishList"
import wishListContainerState from "../atoms/wishListContainer";
import { Link } from "react-router-dom";


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cart = useRecoilValue(cartState);
	const [sideBarCart, setSideBarCart] = useRecoilState(sideBarCartState);
	const wish = useRecoilValue(wishListState)
	const [wishList, setWishList] = useRecoilState(wishListState)
	const [wishListContainer, setWishListContainer] = useRecoilState(wishListContainerState)

	return (
		<div className="font-manrope flex justify-between items-center px-[20px] py-4 border-2 xl:py-4 xl-px-8 fixed w-full z-20 bg-white">
			<div>
				<img className="w-[50px]" src={logo} alt="" />
			</div>

			{/* desktop navbar */}

			<div className="flex gap-8 list-none cursor-pointer hidden xl:flex">
				<Link  className="hover:text-amber-500 transition transform hover:-translate-y-2" to="/">
					Home
				</Link>
				<Link className="hover:text-amber-500 transition transform hover:-translate-y-2" to="/fragrances">
					Fragrances
				</Link>
				<li className="hover:text-amber-500 transition transform hover:-translate-y-2">
					Furnitures
				</li>
				<li className="hover:text-amber-500 transition transform hover:-translate-y-2">
					Electronics
				</li>
				<li className="hover:text-amber-500 transition transform hover:-translate-y-2">
					Contacts
				</li>
			</div>

			{/* mobile navbar */}
			<div
				className={
					isOpen
						? "z-20 flex gap-8 list-none cursor-pointer xl:hidden flex-col transition-all ease-in duration-500 top-0 left-0 pl-5 bg-white fixed h-[100vh] w-[70%] shadow-lg pt-4 z-10"
						: "flex gap-8 list-none cursor-pointer flex-col  top-0 left-[-100%] pl-5 bg-white fixed h-[100vh] w-[70%] shadow-lg pt-4 transition-all ease-out duration-500"
				}>
				<img className="w-[50px]" src={logo} alt="" />
				<li className="hover:text-amber-500 transition transform hover:-translate-x-3">
					Home
				</li>
				<li className="hover:text-amber-500 transition transform hover:-translate-x-3">
					About
				</li>
				<li className="hover:text-amber-500 transition transform hover:-translate-x-3">
					Services
				</li>
				<li className="hover:text-amber-500 transition transform hover:-translate-x-3">
					Products
				</li>
				<li className="hover:text-amber-500 transition transform hover:-translate-x-3">
					Contacts
				</li>
			</div>

			<div className="flex justify-center items-center gap-6">
				<div className="flex gap-8 items-center">
					<div className="flex relative">
						<AiOutlineShoppingCart
							className="w-6 h-6 cursor-pointer"
							title="Shopping Cart"
							onClick={() => setSideBarCart(true)}
						/>
						<p className="text-black text-[14px] bg-[#C5AE32] px-2 rounded-full absolute top-[-10px] right-[-15px]">
							{cart.length}
						</p>
					</div>
					<div>
						<BsSuitHeart className="w-6 h-6 cursor-pointer" title="Wish List" onClick={() => wishList(true)}/>
						<p className="text-black text-[14px] bg-[#C5AE32] px-2 rounded-full absolute top-[32px] xl:right-[30px] right-[60px]">
							{wishList.length}</p>
					</div>
				</div>

				<div>
					{isOpen ? (
						<MdOutlineCancel
							className="h-6 w-6 xl:hidden cursor-pointer"
							title="Delete"
							onClick={() => setIsOpen(!isOpen)}
						/>
					) : (
						<BiMenuAltRight
							className="w-8 h-8 xl:hidden cursor-pointer"
							title="Menu"
							onClick={() => setIsOpen(!isOpen)}
						/>
					)}
				</div>
			</div>

			{sideBarCart ? <SideBarCart /> : null}
		{/* //	{wishListContainer? <WishList /> : null} */}
		</div>
	);
};

export default Navbar;

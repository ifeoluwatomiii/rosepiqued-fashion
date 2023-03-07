import React from "react";
import { useRecoilState } from "recoil";
import cartState from "../atoms/cartStateAtom";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import Lottie from "lottie-react";
import emptyCart from "../assets/Bag-anim.json";
import { useSetRecoilState } from "recoil";
import sideBarCartState from "../atoms/sideBarCartAtom";

const SideBarCart = () => {
	const [cart, setCart] = useRecoilState(cartState);
	const setSideBarCart = useSetRecoilState(sideBarCartState);

	const handleRemoveFromCart = (item) => {
		const leftProducts = cart.filter((product) => {
			return product.id !== item.id;
		});
		setCart(leftProducts);
	};

	const handleIncreaseQuantity = (item) => {
		setCart(
			cart.map((product) =>
				product.id == item.id
					? { ...item, quantity: item.quantity + 1 }
					: product
			)
		);
	};

	const handleDecreaseQuantity = (item) => {
		if (item.quantity > 1) {
			setCart(
				cart.map((product) =>
					product.id == item.id
						? { ...item, quantity: item.quantity - 1 }
						: product
				)
			);
		} else {
			setCart(cart.filter((product) => product.id !== item.id));
		}
	};

	const cartTotalPrice = (cart) => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const cartTotalQuantity = (cart) => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};
	return (
		<div className="absolute h-[100vh] bg-white xl:w-[400px] w-[305px] shadow-md right-[-20px] top-0 py-4 px-4 flex flex-col gap-8 overflow-y-scroll">
			<div className="flex justify-between items-center pt-8 border-b pb-4 w-[100%]">
				<div className="w-[80%] flex justify-center">
					<h2 className="font-bold text-xl">
						My Cart ({cartTotalQuantity(cart)})
					</h2>
				</div>
				<div>
					<VscClose
						className="text-[30px] font-bold cursor-pointer hover:bg-black/10 rounded-full p-1 item-end mr-2"
						onClick={() => setSideBarCart(false)}
					/>
				</div>
			</div>
			<div className="flex flex-col  divide-y  h-full">
				{cart.length == 0 ? (
					<div className="flex flex-col items-center h-[80%] justify-center">
						<Lottie animationData={emptyCart} loop={true} className="w-[40%]" />
						<p className="font-bold mt-4">No Products in the Cart.</p>
						<button className="bg-[#c0a71be3] py-2 px-4 rounded-lg mt-8 transition-all ease-out duration-500" onClick={() => setSideBarCart(false)}>
							Return to Shop
						</button>
					</div>
				) : (
					cart.map((item) => {
						return (
							<div className="flex gap-4 items-center py-8">
								<div className="w-[20%]  ">
									<img src={item.image} />
								</div>
								<div className="xl:w-[70%] w-[60%] flex flex-col gap-2 items-start">
									<h3 className="font-bold text-[15px]">{item.title}</h3>
									<p className="text-black/50 text-[14px] font-bold">
										${item.price}
									</p>
									<div className="flex items-center gap-4 border px-2 py-2">
										<HiOutlinePlus
											className="text-[14px] cursor-pointer"
											onClick={() => {
												handleIncreaseQuantity(item);
											}}
										/>
										<p>{item.quantity}</p>
										<HiOutlineMinus
											className="text-[14px] cursor-pointer"
											onClick={() => {
												handleDecreaseQuantity(item);
											}}
										/>
									</div>
								</div>
								<div className="xl:w-[10%] w-[15%] flex items-start h-full">
									<VscClose
										className="text-[30px] font-bold cursor-pointer hover:bg-black/10 rounded-full p-1 mr-2"
										onClick={() => {
											handleRemoveFromCart(item);
										}}
									/>
								</div>
							</div>
						);
					})
				)}
			</div>
			<div>
				<div className="fixed bottom-5">
					{cart.length > 0 ? (
						<h2>Cart Total : ${cartTotalPrice(cart)}</h2>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default SideBarCart;

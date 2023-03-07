import React from 'react'

const WishList = () => {
    
  return (
    <div className="absolute h-[100vh] bg-white w-[400px] shadow-md right-[-20px] top-0 py-4 px-4 flex flex-col gap-8 overflow-y-scroll">
			<div className="flex justify-between items-center pt-8 border-b pb-4 w-[100%]">
				<div className="w-[80%] flex justify-center">
					<h2 className="font-bold text-xl">
						My WishList
					</h2>
				</div>
				<div>
					<VscClose
						className="text-[30px] font-bold cursor-pointer hover:bg-black/10 rounded-full p-1 item-end"
						onClick={() => (false)}
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
								<div className="w-[70%] flex flex-col gap-2 items-start">
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
								<div className="w-[10%] flex items-start h-full">
									<VscClose
										className="text-[30px] font-bold cursor-pointer hover:bg-black/10 rounded-full p-1"
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
				<div>
					{cart.length > 0 ? (
						<h2>Cart Total : ${cartTotalPrice(cart)}</h2>
					) : null}
				</div>
			</div>
		</div>
      
    
  )
}

export default WishList

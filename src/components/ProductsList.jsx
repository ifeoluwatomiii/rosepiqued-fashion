import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Lottie from "lottie-react"
import balls from "../assets/loading.json"

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [isloading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get("https://fakestoreapi.com/products/");
			setProducts(response.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div>
			{isloading ? (
				<Lottie animationData={balls} loop={true} className="w-[50%] text-amber/500" />
			) : (
				<div className="grid xl:grid-cols-4 xl:gap-10 grid-cols-2 gap-8">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
						
					))}
				</div>
			)}
		</div>
	);
};

export default ProductsList;

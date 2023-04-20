import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FragranceCard from "./FragranceCard";
import supabase from "../supabaseClient.js";

const FragranceList = () => {
	const [products, setProducts] = useState([]);
	const [isloading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchProducts();
	}, []);

	/*   const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(" http://localhost:3000/products");
			setProducts(response.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err.message);
		}
	}; */

	const fetchProducts = async () => {
		try {
			const { data, error } = await supabase.from("products").select("*");

			if (error) {
				throw error;
			} else {
				setProducts(data);
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div>
			<h3 className="font-bold text-2xl text-[#c0a71be3] py-8 m-4 text-center">
				Our Latest Collections
			</h3>
			{isloading ? (
				<h3>Loading...</h3>
			) : (
				<div className="grid xl:grid-cols-4 xl:gap-10 grid-cols-2 gap-3">
					{products.map((product) => (
						<FragranceCard key={product.id} {...product} />
					))}
				</div>
			)}
		</div>
	);
};

export default FragranceList;
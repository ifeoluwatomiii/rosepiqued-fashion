import React, {useEffect} from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fragrances from './pages/Fragrances'
import Furnitures from './pages/Furnitures'
import { Routes, Route } from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import supabase from "./supabaseClient.js";
import { useRecoilState } from "recoil";
import productsState from "./atoms/productsAtom";


const App = () => {
const [products, setProducts] = useRecoilState(productsState);


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

	console.log(products)
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

    <div className='font-manrope'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fragrances" element={<Fragrances/>}/>
        <Route path='/furnitures' element={<Furnitures/>}/>
        <Route path='/products/:productId' element={<SingleProduct/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App

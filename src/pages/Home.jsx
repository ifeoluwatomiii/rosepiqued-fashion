import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Recent from "../components/Recent";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Recent />
			<Footer />
		</div>
	);
};

export default Home;

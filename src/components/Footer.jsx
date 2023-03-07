import React from "react";
import { BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="font-manrope flex justify-evenly px-8 py-8 border-2 flex-col xl:flex-row">
			<div className="">
				<h1 className="font-bold text-lg mb-4">Company Info</h1>
				<p className="mb-2 hover:text-amber-500">About Us</p>
				<p className="mb-2 hover:text-amber-500">Careers</p>
				<p className="mb-2 hover:text-amber-500">Social Responsibility</p>
				<p className="mb-2 hover:text-amber-500">Affiliate Programs</p>
				<p className="mb-2 hover:text-amber-500">Business with Us</p>
			</div>
			<div>
				<h1 className="font-bold text-lg mb-4">Help</h1>
				<p className="mb-2 hover:text-amber-500">Contact Us</p>
				<p className="mb-2 hover:text-amber-500">Order Status</p>
				<p className="mb-2 hover:text-amber-500">Shipping Info</p>
				<p className="mb-2 hover:text-amber-500">Size Guide</p>
				<p className="mb-2 hover:text-amber-500">FAQ</p>
			</div>
			<div>
				<h1 className="font-bold text-lg mb-4">Quick Links</h1>
				<p className="mb-2 hover:text-amber-500">Special Offers</p>
				<p className="mb-2 hover:text-amber-500">Gift Cards</p>
				<p className="mb-2 hover:text-amber-500">Student Discount</p>
				<p className="mb-2 hover:text-amber-500">Blog</p>
				<p className="mb-2 hover:text-amber-500">Privacy Policy</p>
			</div>
			<div>
				<h1 className="font-bold text-lg mb-4">RosePiqued Rewards</h1>
				<p className="mb-2 hover:text-amber-500">Apply Now</p>
				<p className="mb-2 hover:text-amber-500">Card Benefits</p>
				<p className="mb-2 hover:text-amber-500">Manage Account</p>
			</div>
			<div className="flex mt-20 gap-4">
				<h1 className="font-bold text-lg">Follow Us:</h1>
				<BsInstagram className="w-6 h-6 hover:text-amber-500 transition transform hover:-translate-y-2" />
				<BsTwitter className="w-6 h-6 hover:text-amber-500 transition transform hover:-translate-y-2" />
				<BsPinterest className="w-6 h-6 hover:text-amber-500 transition transform hover:-translate-y-2" />
				<FaTiktok className="w-6 h-6 hover:text-amber-500 transition transform hover:-translate-y-2 " />
			</div>
		</div>
	);
};

export default Footer;

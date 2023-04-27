import React from 'react'
import {RiInstagramLine, RiFacebookLine, RiTwitterLine, RiGithubFill} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
            {/* Logo */}
            <div className="w-1/6">
                <a href="#" className="text-2xl font-bold relative p-1 bg-footer text-white ">
                    Power
                    <span className="text-primary text-5xl">.</span>{" "}
                </a>
            </div>
            {/* Social media */}
            <nav className="flex items-center gap-4">
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
                {" "}
                <RiInstagramLine />{" "}
            </a>
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
                {" "}
                <RiFacebookLine />{" "}
            </a>
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
                {" "}
                <RiTwitterLine />{" "}
            </a>
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
                {" "}
                <RiGithubFill />{" "}
            </a>
            </nav>
        </div>

        <div className="mt-8">
            <h3 className="text-lg font-bold text-white text-center md:text-left">
                Company
            </h3>
            <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 "> 
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors ">About Us</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors ">Press</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors ">Investors</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors ">Events</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors ">Terms of use</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors ">Privacy policy</a>
            <button type="button" className="mt-4 font-semibold py-2 px-6 bg-primary text-white rounded-xl">Contact Us</button>
            </nav>
        </div>

       
        <div className="mt-20">
            <p className="text-gray-400 text-center">
            © Federico Peregrin 2023 - All Rights Reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer


import { Link } from "react-router-dom";
import {  FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => 
{

    return (
        <div className="pt-[30vh]">
            <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
                <div
                className="w-full md:w-auto mb-4 md:mb-0"
                >
                <a href="#" className="flex justify-center items-center text-white font-bold">

                    <Link to = "/" className="hover:text-white text-xl">
                        TIMEZEN
                    </Link>
                </a>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0 mx-auto">
                <ul className="grid grid-cols-3 gap-3 text-center">
                    <li>
                    <Link to = "/" className="hover:text-white font-semibold">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to = "/shop" className="hover:text-white font-semibold">
                        Shop
                    </Link>
                    </li>
                    <li>
                    <Link to = "/brands" className="hover:text-white font-semibold">
                        Brands
                    </Link>
                    </li>
                    <li>
                    <Link to = "/showrooms" className="hover:text-white font-semibold">
                        Showrooms
                    </Link>
                    </li>
                    <li>
                    <Link to = "/contact" className="hover:text-white font-semibold">
                        Contact
                    </Link>
                    </li>
                    <li>
                    <Link  to = "/services" className="hover:text-white font-semibold">
                        Services
                    </Link>
                    </li>
                </ul>
                </div>
                <div className="w-full md:w-auto lg:text-right text-center pt-6">
                <p className="mb-2">123 Gulshan, Dhaka</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p>Email: info@footagepro.com</p>
                <div className="flex lg:justify-end justify-center py-5 ">
                    <FaGoogle></FaGoogle>
                    <FaFacebookF></FaFacebookF>
                    <FaInstagram></FaInstagram>
                </div>
                </div>
            </div>
            <div className="border-t border-gray-600 pt-4 mt-4 text-center">
                <p className="text-teal-4gi00">&copy; 2023 TIMEZEN. All rights reserved.</p>
            </div>
            </footer>
        </div>

    );
};

export default Footer;
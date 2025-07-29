import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700 px-4 md:px-16 lg:px-24 xl:px-32 py-4" id="Contact">
            <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="flex flex-col gap-4 w-full md:w-1/3">
                    <div>
                        <h3 className="font-semibold">Timing</h3>
                        <p className="text-sm mt-1">10:30 am to 7:30 pm</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm mt-1">info@gmail.com</p>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                        <h3 className="font-semibold">Contact Number</h3>
                        <p className="text-sm mt-1">7896541239</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="font-semibold">Our Clinic</h3>
                    <p className="text-sm mt-1 leading-relaxed">
                        890, Sector 62, Gyan Sarovar, GAIL <br />
                        Noida (Delhi/NCR)
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="font-semibold">Socials</h3>
                    <div className="flex items-center gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-gray-600 hover:text-blue-600" size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-gray-600 hover:text-blue-400" size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-gray-600 hover:text-pink-500" size={20} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-gray-600 hover:text-red-600" size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

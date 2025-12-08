import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      {/* FOOTER SECTION */}
      <footer className="bg-[#d8d9c0] py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 grid md:grid-cols-3 gap-12">
          {/* COLUMN 1 – Logo + Contact */}
          <div>
            <h1 className="tracking-[0.3em] text-2xl font-semibold text-green-900 mb-6">
              AMRUTAM
            </h1>

            <h3 className="text-green-900 font-semibold mb-3">Get in touch</h3>

            <p className="text-amrutamText mb-2">support@amrutam.global</p>

            <p className="text-amrutamText mb-2 leading-relaxed">
              Amrutam Pharmaceuticals Pvt Ltd., <br />
              chitragupt ganj, Nai Sadak, Lashkar, <br />
              Gwalior – 474001
            </p>

            <p className="text-amrutamText font-medium">+91 9713171999</p>
          </div>

          {/* COLUMN 2 – Information Links */}
          <div>
            <h3 className="text-green-900 font-semibold mb-4">Information</h3>

            <ul className="space-y-2 text-amrutamText">
              <li className="cursor-pointer hover:text-green-900">About Us</li>
              <li className="cursor-pointer hover:text-green-900">
                Terms and Conditions
              </li>
              <li className="cursor-pointer hover:text-green-900">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-green-900">
                Privacy Policy for Mobile App
              </li>
              <li className="cursor-pointer hover:text-green-900">
                Shipping and Return Policy
              </li>
              <li className="cursor-pointer hover:text-green-900">
                International Delivery
              </li>
              <li className="cursor-pointer hover:text-green-900">
                For Business, Hotels and Resorts
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – Social Icons */}
          <div>
            <h3 className="text-green-900 font-semibold mb-6">Follow Us</h3>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
                <FaFacebookF size={18} />
              </div>

              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
                <FaInstagram size={18} />
              </div>

              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
                <FaYoutube size={20} />
              </div>

              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
                <FaTwitter size={18} />
              </div>

              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
                <FaLinkedinIn size={18} />
              </div>

              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
                <FaPinterestP size={18} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

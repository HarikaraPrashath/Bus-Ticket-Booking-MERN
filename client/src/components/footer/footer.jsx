import React from "react";
import Rootlayout from "../../layout/rootlayout";
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagramSquare,FaTiktok,FaYoutube} from "react-icons/fa";




const Footer = () => {
  return (
    <div className="w-full h-auto bg-blue-900 text-white">
      <Rootlayout className="space-y-10 py-10">
        {/* Footer content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link
              to="/"
              className="text-4xl font-bold text-blue-200 hover:text-white"
            >
              Bus
            </Link>
            <p className="text-sm text-blue-300">
              Your reliable partner in comfortable and safe bus travel. Explore
              routes, book tickets, and enjoy a hassle-free journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <ul>
                <li>
                  <Link to="/about" className="text-blue-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/my-account"
                    className="text-blue-300 hover:text-white"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/reserve-ticket"
                    className="text-blue-300 hover:text-white"
                  >
                    Reserve Ticket
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/create-account"
                    className="text-blue-300 hover:text-white"
                  >
                    Create Your Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Popular Routes</h4>
            <div className="space-y-2">
              <ul>
                <li>
                  <Link to="/" className="text-blue-300 hover:text-white">
                    Galle - Panadura
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/" className="text-blue-300 hover:text-white">
                    Kandy - Panadura
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-blue-300 hover:text-white">
                    Colombo - Jaffna
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/" className="text-blue-300 hover:text-white">
                    Gampaha - Matara
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600"
              >
               <FaFacebook/>
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600"
              >
                <FaInstagramSquare/>
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600"
              >
               <FaTiktok/>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600"
              >
                <FaYoutube/>
              </Link>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-blue-700"></div>

        {/* CopyRight */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-blue-300">
          <p>© {new Date().getFullYear()} Bus Travel. All rights reserved.</p>
          <p>
            Designed by {" "}
            <a href="#" className="text-blue-400 hover:text-white">
              Falconojeen
            </a>
          </p>
        </div>
      </Rootlayout>
    </div>
  );
};

export default Footer;

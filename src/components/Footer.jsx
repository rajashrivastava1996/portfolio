"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white pt-16 pb-10 px-4 md:px-10 lg:px-20">
      {/* Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Socials */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-1">
            <span className="text-blue-500">
              <svg
                width="220"
                height="60"
                viewBox="0 0 220 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="220" height="60" rx="10" fill="#0F172A" />
                <text
                  x="20"
                  y="38"
                  fill="#38BDF8"
                  fontFamily="Courier New, monospace"
                  fontSize="24"
                  fontWeight="bold"
                >
                  &lt;Raja Dev/&gt;
                </text>
              </svg>
            </span>
          </h2>
          <p className="text-sm text-gray-400 mb-2">
            © 2025 Raja Shrivastava. All rights reserved.
          </p>
          <div className="flex gap-4 text-lg mt-4 text-gray-300">
            <FaTwitter className="hover:text-green-400 transition" />
            <FaFacebookF className="hover:text-green-400 transition" />
            <FaDribbble className="hover:text-green-400 transition" />
            <FaInstagram className="hover:text-green-400 transition" />
            <FaYoutube className="hover:text-green-400 transition" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-300">Bengaluru, Karnataka, India</p>
          <p className="mt-3 text-sm text-gray-300">
            rajashrivastava983@gmail.com
          </p>
          <p className="text-sm text-gray-300">+91 9340122466</p>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-green-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-400">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-green-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated with my latest projects and tech insights.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 px-4 py-2 font-semibold rounded-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 bg-transparent border border-sky-500 text-sky-500 p-2 rounded-full hover:bg-sky-500 hover:text-white transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

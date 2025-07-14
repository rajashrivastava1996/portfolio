"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#aboutus" },
  { label: "Projects", href: "#project" },
  { label: "Blog", href: "#blog" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-gray-950 to-gray-900 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
          <span className="text-blue-600">
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
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-green-300 transition"
            >
              {link.label}
            </Link>
          ))}

          <Button
            asChild
            className="rounded-full px-6 py-2 hover:bg-green-200 hover:text-primary"
          >
            <Link href="#contactus">
              Contact Me <ArrowBigDown className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Menu
            className="w-7 h-7 text-white cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white p-6 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="text-2xl font-bold">Raja Dev</span>
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-green-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-green-400 hover:text-white mt-4"
          >
            → Contact Me
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="mt-10 text-sm text-gray-300 space-y-1">
          <p>info@email.com</p>
          <p>00 (123) 456 78 90</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg text-white mt-6">
          <FaTwitter />
          <FaFacebookF />
          <FaDribbble />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </header>
  );
}

"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-16 px-4 md:px-8"
      id="contactus"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold underline decoration-4">
          Get <span className="text-green-400">in Touch</span>
        </h2>
        <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Have a project in mind or just want to chat about code? Drop me a
          message, and let's make things happen!
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-5xl mx-auto bg-[#161B22] border border-gray-800 rounded-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">
            <Mail className="text-green-400" /> Send a Message
          </h3>

          <form
            action="https://formspree.io/f/xzzvpkvj" // Replace with your Formspree form ID
            method="POST"
            className="space-y-5"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-6">Contact Info</h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="text-green-400" size={18} />
              rajashrivastava983@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-green-400" size={18} />
              +91 7354815192
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-green-400" size={18} />
              Bengaluru, Karnataka, India
            </li>
          </ul>

          <h4 className="mt-6 mb-3 text-sm font-semibold">Connect with Me</h4>
          <div className="flex gap-4 text-xl text-white">
            <a
              href="https://github.com/rajashrivastava1996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-green-400 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-green-400 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-green-400 transition" />
            </a>
            <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
              <FaDev className="hover:text-green-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

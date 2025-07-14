"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import TechMarquee from "./TechMarquee";
import { Link } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-base sm:text-lg text-green-400 font-mono tracking-wider">
          Hello World! I'm
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 leading-tight">
          <span className="text-white">Raja </span>
          <span className="text-green-500">Shrivastava</span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
          Crafting elegant solutions to complex problems with clean code and
          innovative thinking. Welcome to my personal dev workspace where ideas
          come to life.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white text-md px-6 py-2 rounded-full">
            View Projects
          </Button>
          <a href="#contactus">
            <Button
              variant="outline"
              className="text-white bg-primary hover:bg-green-500 hover:text-white text-md px-6 py-2 rounded-full"
            >
              Contact Me
            </Button>
          </a>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-20 flex justify-center">
        <Image
          src="/images/favicon.svg"
          alt="Developer Terminal Illustration"
          width={400}
          height={200}
          priority
          className="drop-shadow-[0_0_80px_rgba(34,197,94,0.4)] w-3/4 sm:w-[200px] md:w-[300px]"
        />
      </div>

      <div className="mt-10">
        <TechMarquee />
      </div>
    </section>
  );
}

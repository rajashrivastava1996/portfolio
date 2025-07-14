"use client";

import React from "react";
import { User, Code } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { value: "152", label: "Repositories" },
    { value: "4.2k", label: "Commits" },
    { value: "87", label: "PRs Merged" },
  ];

  const skills = [
    { name: "Frontend", percent: 90 },
    { name: "HTML5", percent: 95 },
    { name: "CSS3", percent: 95 },
    { name: "JavaScript", percent: 95 },
    { name: "React Js", percent: 95 },
    { name: "Next Js", percent: 90 },
  ];

  const techStack = [
    "JavaScript",
    "React",
    "Next Js",
    "HTML5",
    "CSS3",
    "Tailwind",
    "React Native",
    "Git",
  ];

  return (
    <section
      className="bg-[#0f1117] text-white py-16 px-4 sm:px-6 lg:px-8"
      id="aboutus"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About <span className="text-green-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Passionate developer with a love for clean code, strong coffee, and
          open source contributions.
        </p>
      </div>

      <div className="bg-primary border border-gray-700 rounded-lg p-6 text-center max-w-3xl mx-auto mb-12 shadow-md">
        <p className="text-gray-300 text-sm mb-2 truncate">github.com</p>
        <div className="bg-gray-800 rounded-md overflow-hidden mb-4">
          <img
            className="w-full h-24 object-cover"
            src="https://sandbox.elemisthemes.com/assets/img/photos/bg2.jpg"
            alt="GitHub Graph"
          />
        </div>
        <h3 className="text-2xl font-bold text-white">Raja Srivastava</h3>
        <p className="text-green-400 mt-1">
          Frontend Developer & Open Source Enthusiast
        </p>
        <button className="mt-4 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm border border-gray-600 text-white">
          🍴 Fork My Portfolio{" "}
          <span className="ml-2 bg-gray-700 px-2 py-0.5 rounded text-xs">
            14
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-[#13161f] p-6 rounded-md border border-gray-700 shadow-sm">
          <h3 className="text-xl font-mono text-green-400 flex items-center gap-2 mb-4">
            <User className="w-5 h-5" /> Who I Am
          </h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            I'm a passionate developer with 3+ years of experience building web
            applications and contributing to open source projects. I specialize
            in creating clean, efficient, and maintainable code.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            When I'm not coding, you can find me exploring new technologies,
            writing tech articles, or enjoying a fresh cup of coffee while
            debugging complex problems.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-black/20 p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-green-400">
                  {item.value}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#13161f] p-6 rounded-md border border-gray-700 shadow-sm">
          <h3 className="text-xl font-mono text-green-400 flex items-center gap-2 mb-4">
            <Code className="w-5 h-5" /> My Toolbox
          </h3>

          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded">
                  <div
                    className="h-full bg-green-400 rounded"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

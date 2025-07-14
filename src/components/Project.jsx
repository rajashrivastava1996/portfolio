"use client";

import { Book, CheckSquare, Laptop, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/images/converter.jpg",
    title: "Currency Converter",
    description:
      "A dynamic web app that converts currencies in real-time using live exchange rates, built with React and integrated with an API.",
    techs: ["React", "API Integration", "CSS"],
    repo: "#",
    demo: "#",
    icon: <Laptop size={18} />,
  },
  {
    image: "/images/learning.webp",
    title: "Learning Module",
    description:
      "An interactive platform for online learning featuring quizzes, progress tracking, and video integration.",
    techs: ["React", "Node.js", "MongoDB"],
    repo: "#",
    demo: "#",
    icon: <Book size={18} />,
  },
  {
    image: "/images/todo.png",
    title: "Todo List App",
    description:
      "A simple and intuitive task management app to organize daily tasks with features like reminders and priorities.",
    techs: ["React", "LocalStorage", "CSS"],
    repo: "#",
    demo: "#",
    icon: <CheckSquare size={18} />,
  },
];

export default function Project() {
  return (
    <section
      className="bg-[#020617] py-16 px-6 md:px-20 text-center"
      id="project"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold font-mono text-white">
        Latest <span className="text-green-400">Projects</span>
      </h2>
      <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
        A collection of my recent work, showcasing innovative solutions and
        clean code. Click to explore details.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0F172A] rounded-xl border border-[#1E293B] shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center gap-2 text-green-400 font-bold text-lg font-mono">
                  {project.icon}
                  <h3 className="text-white text-lg">{project.title}</h3>
                </div>
                <p className="text-left text-sm text-gray-400 mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1E293B] text-gray-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-5">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-white hover:text-gray-400" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 text-white hover:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

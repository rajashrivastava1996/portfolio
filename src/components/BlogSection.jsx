"use client";

import { CalendarDays } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    title: "Mastering React Hooks: A Deep Dive",
    description:
      "Explore the power of React Hooks to manage state and side effects in functional components, with practical examples and best practices.",
    tags: ["React", "JavaScript", "Frontend"],
    date: "May 10, 2025",
    image: "/images/reacthooks.png",
  },
  {
    title: "Scaling Node.js Apps with Docker",
    description:
      "Learn how to containerize Node.js applications using Docker for seamless deployment and scalability in production environments.",
    tags: ["Node.js", "Docker", "DevOps"],
    date: "April 25, 2025",
    image: "/images/node-docker.png",
  },
  {
    title: "Why TailwindCSS Changed My Workflow",
    description:
      "Discover how TailwindCSS streamlines frontend development with utility-first styling, boosting productivity and maintainability.",
    tags: ["TailwindCSS", "CSS", "Frontend"],
    date: "April 15, 2025",
    image: "/images/tailwind-post.png",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-primary text-white py-20 px-6" id="blog">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-green-400">Blog</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Dive into my thoughts on coding, tech trends, and developer life.
          Explore my latest posts below.
        </p>
      </div>

      <div className="space-y-6 max-w-5xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#0F172A] border border-[#1E293B] rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={120}
              className="w-full md:w-60 h-40 object-cover"
            />
            <div className="flex flex-col justify-between p-5 flex-1">
              <div>
                <h3 className="text-white text-lg font-bold mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{post.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#1E293B] text-gray-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <CalendarDays size={14} />
                  {post.date}
                </div>
              </div>
              <div className="text-right mt-3 md:mt-0">
                <a
                  href="#"
                  className="text-green-400 text-sm font-medium hover:underline flex items-center gap-1 justify-end"
                >
                  Read More <span className="text-green-400">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-md">
          👀 View All Posts
        </button>
      </div>
    </section>
  );
}

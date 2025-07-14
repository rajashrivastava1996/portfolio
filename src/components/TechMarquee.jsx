"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const techs = [
  { name: "NPM", src: "/images/npm.png" },
  { name: "JavaScript", src: "/images/js.png" },
  { name: "React Js", src: "/images/react.png" },
  { name: "Next Js", src: "/images/nextjs.jpeg" },
  { name: "HTML5", src: "/images/html.png" },
  { name: "CSS3", src: "/images/css.png" },
  { name: "Tailwind", src: "/images/tailwind.png" },
  { name: "SASS", src: "/images/sass.png" },
  { name: "Git", src: "/images/git.png" },
  { name: "Bootstrap", src: "/images/bootstrap.jpeg" },
  { name: "React Native", src: "/images/react.png" },
  { name: "Postman", src: "/images/postman.jpg" },
  { name: "Shadcn/ui", src: "/images/bootstrap.jpeg" },
];

export default function TechMarquee() {
  return (
    <div className="bg-[#0F172A] py-4">
      <Marquee speed={50} pauseOnHover gradient={false}>
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 mx-6 text-white text-sm"
          >
            <Image src={tech.src} alt={tech.name} width={24} height={24} />
            <span>{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

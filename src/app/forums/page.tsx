"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const topics = [
  {
    text: "Python",
    img: "/python.jpeg",
    desription:
      "Let's discuss everything related to Python programming language.",
    slug: "python-",
  },
  {
    text: "JavaScript",
    img: "/image.png",
    desription:
      "Explore the world of JavaScript, from basics to advanced concepts.",
    slug: "javascript-",
  },
  {
    text: "React",
    img: "/react.png",
    desription:
      "A place to discuss React, components, hooks, and state management.",
    slug: "react-",
  },
  {
    text: "Next.js",
    img: "/next-js.jpeg",
    desription:
      "All about Next.js, server-side rendering, and static site generation.",
    slug: "nextjs-",
  },
  {
    text: "Tailwind CSS",
    img: "/tailwindcss.png",
    desription: "Discuss utility-first CSS framework for modern web designs.",
    slug: "tailwindcss-",
  },
  {
    text: "Node.js",
    img: "/node-js.png",
    desription: "Server-side JavaScript with Node.js and backend development.",
    slug: "nodejs-",
  },
  {
    text: "Sanity CMS",
    img: "/sanity.png",
    desription: "Learn and share knowledge about Sanity, a headless CMS.",
    slug: "sanity-",
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Forums() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Discussion Forums
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.img}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="relative group"
              >
                <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20 hover:border-white/30 shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />
                      <Image
                        src={topic.img}
                        width={120}
                        height={120}
                        alt={topic.text}
                        className="object-contain rounded-full border-4 border-white/20 shadow-lg z-10 relative"
                      />
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-4">
                      {topic.text}
                    </h2>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {topic.desription}
                    </p>

                    <Link href={`forum/${topic.slug}`}>
                      <Button
                        variant="ghost"
                        className="w-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-lg py-6 transition-all duration-300 group-hover:translate-y-[-2px]"
                      >
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                          Join Discussion →
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forums;

"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { useState } from "react";
import Monogram from "@/components/home/Monogram";

export default function Page() {
  const [activeBlog, setActiveBlog] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((blog) => blog.category))),
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="flex items-center gap-4 mb-10">
        <Link href="/">
          <Monogram letter="V" size="md" animated={false} />
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Blogs
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 relative p-2 rounded-xl">
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-xl -z-10"></div>
        <div className="absolute inset-0 border border-gray-700 rounded-xl -z-10"></div>

        {categories.map((category) => (
          <button
            key={category}
            className={`
        px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium relative overflow-hidden group
        ${
          selectedCategory === category
            ? "text-black"
            : "text-white hover:text-emerald-300"
        }
        text-sm sm:text-base
      `}
            onClick={() => setSelectedCategory(category)}
          >
            {selectedCategory === category && (
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 animate-gradient-x"></span>
            )}
            <span
              className={`relative z-10 ${selectedCategory === category ? "" : "group-hover:scale-110 transition-transform duration-300"}`}
            >
              {category}
            </span>
            {selectedCategory !== category && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-12 sm:space-y-16 md:space-y-24 max-w-5xl mx-auto">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="relative"
              onMouseEnter={() => setActiveBlog(index)}
              onMouseLeave={() => setActiveBlog(null)}
            >
              {/* Blog card */}
              <div
                className={`
              relative border border-gray-800 rounded-lg overflow-hidden
              transition-all duration-500 ease-out
              ${activeBlog === index ? "transform-gpu -translate-y-2" : ""}
            `}
              >
                {/* Blog content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-emerald-400">
                        {blog.title}
                      </h2>

                      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-6">
                        {blog.description}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 md:mb-6">
                      <span className="px-2.5 py-1 bg-gray-900 rounded-full text-emerald-400 font-medium">
                        {blog.category}
                      </span>
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    {/* Tags */}
                    {blog.tags && (
                      <div className="mb-4 sm:mb-6 md:mb-8">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {blog.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Read More Link */}
                    <div className="flex gap-3 sm:gap-4 mt-auto">
                      {blog.link && (
                        <Link
                          href={blog.link}
                          target="_blank"
                          className="group relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-hidden rounded-lg bg-transparent text-xs sm:text-sm md:text-base"
                        >
                          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:opacity-100 opacity-70"></span>
                          <span className="relative text-black font-medium">
                            Read More
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-emerald-400 transition-all duration-700 ease-in-out"
                  style={{
                    width: activeBlog === index ? "100%" : "0%",
                  }}
                ></div>
              </div>

              {/* Blog number */}
              <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-6 sm:-top-8 md:-top-10 text-4xl sm:text-6xl md:text-8xl font-bold text-gray-800 opacity-50 select-none">
                {(index + 1).toString().padStart(2, "0")}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No blogs found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

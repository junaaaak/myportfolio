"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Monogram from "@/components/home/Monogram";

export default function Page() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<
    "All" | "Professional" | "Personal"
  >("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="flex items-center gap-4 mb-10">
        <Link href="/">
          <Monogram letter="V" size="md" animated={false} />
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 relative p-2 rounded-xl">
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-xl -z-10"></div>
        <div className="absolute inset-0 border border-gray-700 rounded-xl -z-10"></div>

        {["All", "Professional", "Personal"].map((type) => (
          <button
            key={type}
            className={`
        px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium relative overflow-hidden group
        ${
          selectedType === type
            ? "text-black"
            : "text-white hover:text-emerald-300"
        }
        text-sm sm:text-base
      `}
            onClick={() =>
              setSelectedType(type as "All" | "Professional" | "Personal")
            }
          >
            {selectedType === type && (
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 animate-gradient-x"></span>
            )}
            <span
              className={`relative z-10 ${selectedType === type ? "" : "group-hover:scale-110 transition-transform duration-300"}`}
            >
              {type}
            </span>
            {selectedType !== type && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-12 sm:space-y-16 md:space-y-24 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Project card */}
            <div
              className={`
              relative border border-gray-800 rounded-lg overflow-hidden
              transition-all duration-500 ease-out
              ${activeProject === index ? "transform-gpu -translate-y-2" : ""}
              ${project.in_progress ? "border-amber-700" : ""}
            `}
            >
              {/* In Progress Badge */}
              {project.in_progress && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
                  <div className="flex items-center gap-1.5 bg-amber-900/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-600">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                    </span>
                    <span className="text-amber-300 text-xs font-medium">
                      In Progress
                    </span>
                  </div>
                </div>
              )}

              {/* Project content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                  {/* Left side - Project info */}
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-emerald-400">
                      {project.name}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="mb-4 sm:mb-6 md:mb-8">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-3 sm:gap-4 mt-auto">
                      {project.demo_link && (
                        <Link
                          href={project.demo_link}
                          target="_blank"
                          className="group relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-hidden rounded-lg bg-transparent text-xs sm:text-sm md:text-base"
                        >
                          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:opacity-100 opacity-70"></span>
                          <span className="relative text-black font-medium">
                            Live Demo
                          </span>
                        </Link>
                      )}

                      {project.code_link && (
                        <Link
                          href={project.code_link}
                          target="_blank"
                          className="group relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-hidden rounded-lg border border-gray-700 text-xs sm:text-sm md:text-base"
                        >
                          <span className="absolute inset-0 w-0 bg-gray-800 transition-all duration-300 ease-out group-hover:w-full"></span>
                          <span className="relative text-white font-medium">
                            View Code
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right side - Project image if available */}
                  {project.image && (
                    <div className="w-full md:w-2/5 relative h-[150px] sm:h-[175px] md:h-[200px] lg:h-auto rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="object-contain"
                        fill
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Animated border */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 sm:h-1 transition-all duration-700 ease-in-out ${project.in_progress ? "bg-amber-500" : "bg-emerald-400"}`}
                style={{
                  width: activeProject === index ? "100%" : "0%",
                }}
              ></div>
            </div>

            {/* Project number */}
            <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-6 sm:-top-8 md:-top-10 text-4xl sm:text-6xl md:text-8xl font-bold text-gray-800 opacity-50 select-none">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* View More on GitHub button */}
      {["All", "Personal"].includes(selectedType) && (
        <div className="mt-16 mb-8 sm:mt-20 md:mt-24 flex justify-center">
          <Link
            href="https://github.com/junaaaak"
            target="_blank"
            className="group relative overflow-hidden rounded-lg px-6 py-3 bg-transparent border border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.querySelector(".btn-glow")?.classList.add("animate-pulse");
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target
                .querySelector(".btn-glow")
                ?.classList.remove("animate-pulse");
            }}
          >
            <span className="btn-glow absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-12 transition-transform duration-300"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View More Projects on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

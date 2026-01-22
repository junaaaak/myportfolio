"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { educationData } from "@/data/education";

const Education = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <>
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {educationData.map((education, index) => (
          <div
            key={index}
            className="relative border border-gray-800 rounded-lg transition-all duration-500 overflow-hidden"
            style={{
              borderColor: hoveredItem === index ? "#10b981" : "", // emerald-500
              boxShadow:
                hoveredItem === index
                  ? "0 0 15px rgba(16, 185, 129, 0.3)"
                  : "none",
              transform:
                hoveredItem === index ? "translateY(-5px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="p-4 sm:p-5 md:p-6 flex items-start gap-3 sm:gap-4 md:gap-6">
              {/* University logo */}
              {education.logo && (
                <div className="flex-shrink-0">
                  <div
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 flex items-center justify-center transition-all duration-500 ${
                      hoveredItem === index
                        ? "border-emerald-500 scale-110"
                        : "border-gray-700"
                    }`}
                    style={{ background: education.logoBg }}
                  >
                    <Image
                      src={education.logo}
                      alt={education.institution}
                      width={70}
                      height={70}
                      className={`object-contain transition-transform duration-500 ${
                        hoveredItem === index ? "scale-110" : ""
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Education details */}
              <div className="flex-grow flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    hoveredItem === index ? "text-emerald-400" : ""
                  }`}
                >
                  {education.degree}
                </h3>
                <Link
                  href={education.institutionUrl || "#"}
                  target={education.institutionUrl !== "#" ? "_blank" : ""}
                  className="text-emerald-400 hover:underline underline-offset-2 block w-fit text-sm sm:text-base md:text-base"
                  onClick={(e) => education.institutionUrl === "#" && e.preventDefault()}
                >
                  {education.institution}
                </Link>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-sm text-gray-400">
                  <span>{education.year}</span>
                  {education.gpa && <span>GPA: {education.gpa}</span>}
                </div>

                {education.highlights && (
                  <ul className="mt-2 sm:mt-3 md:mt-4 space-y-1 sm:space-y-2 md:space-y-2">
                    {education.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm sm:text-base md:text-base text-gray-300 flex gap-2"
                      >
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/experience";
import DownloadResumeBtn from "./DownloadResumeBtn";

const Experience = () => {
  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState<number[]>([]);
  // State to track which item is being hovered
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Toggle accordion item
  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <DownloadResumeBtn />
      </div>

      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {data.map((experience, index) => (
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
            {/* Timeline connector */}
            {index < data.length - 1 && (
              <div className="absolute left-[25px] sm:left-14 md:left-16 top-full w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
            )}

            {/* Accordion header - always visible */}
            <div
              className="p-4 sm:p-5 md:p-6 flex items-start gap-3 sm:gap-4 md:gap-6 cursor-pointer relative z-10"
              onClick={() => toggleItem(index)}
            >
              {/* Company logo */}
              <div className="flex-shrink-0">
                <div
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 flex items-center justify-center transition-all duration-500 ${
                    hoveredItem === index
                      ? "border-emerald-500 scale-110"
                      : "border-gray-700"
                  }`}
                  style={{ background: experience.iconBg }}
                >
                  <Image
                    src={experience.icon}
                    alt={experience.company_name}
                    width={70}
                    height={70}
                    className={`object-contain transition-transform duration-500 ${
                      hoveredItem === index ? "scale-110" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Basic experience details */}
              <div className="flex-grow flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    hoveredItem === index ? "text-emerald-400" : ""
                  }`}
                >
                  {experience.title}
                </h3>
                <Link
                  href={experience.company_url || "#"}
                  target="_blank"
                  className="text-emerald-400 hover:underline underline-offset-2 block w-fit text-sm sm:text-base md:text-base"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company_name}
                </Link>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {experience.date}
                </p>
              </div>

              {/* Accordion toggle icon */}
              <div className="flex-shrink-0 flex items-center mt-1">
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-500 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  } ${
                    hoveredItem === index ? "text-emerald-400" : "text-white"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Accordion content - visible when expanded */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openItems.includes(index)
                  ? "max-h-[500px] opacity-100 px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-800 ml-[44px] sm:ml-[72px] md:ml-[88px]">
                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start transition-all duration-300 text-xs sm:text-sm md:text-base"
                      style={{
                        transform: `translateX(${
                          openItems.includes(index) ? "0" : "-10px"
                        })`,
                        opacity: openItems.includes(index) ? 1 : 0,
                        transitionDelay: `${pointIndex * 100}ms`,
                      }}
                    >
                      <span className="text-emerald-400 mr-2 flex-shrink-0">
                        ▹
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;

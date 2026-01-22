"use client";

import { useState } from "react";
import Link from "next/link";
import { certificationsData } from "@/data/certifications";

const Certifications = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <>
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        Courses & Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-lg transition-all duration-500 overflow-hidden p-4 sm:p-5 md:p-6 flex flex-col gap-3"
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
            <h3
              className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${
                hoveredItem === index ? "text-emerald-400" : ""
              }`}
            >
              {cert.title}
            </h3>
            {cert.credentialUrl && cert.credentialUrl !== "#" ? (
              <Link
                href={cert.credentialUrl}
                target="_blank"
                className="text-emerald-400 hover:underline underline-offset-2 text-sm sm:text-base md:text-base w-fit"
              >
                {cert.issuer}
              </Link>
            ) : (
              <p className="text-sm sm:text-base md:text-base text-emerald-400">
                {cert.issuer}
              </p>
            )}
            <p className="text-xs sm:text-sm md:text-sm text-gray-400">
              {cert.date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certifications;

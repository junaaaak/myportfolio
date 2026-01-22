import { skills } from "@/data/skills";
import Image from "next/image";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Group skills by type
  const skillTypes = Array.from(new Set(skills.map((skill) => skill.type)));

  return (
    <>
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      {skillTypes.map((type) => (
        <div key={type} className="mb-6 sm:mb-8 md:mb-12">
          <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-emerald-400">
            {type}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {skills
              .filter((skill) => skill.type === type)
              .map((skill, index) => {
                const skillIndex = skills.indexOf(skill);
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg border border-gray-800 bg-gray-900 bg-opacity-40 transition-all duration-300"
                    style={{
                      transform:
                        hoveredSkill === skillIndex
                          ? "translateY(-5px)"
                          : "translateY(0)",
                      boxShadow:
                        hoveredSkill === skillIndex
                          ? "0 10px 20px rgba(16, 185, 129, 0.2)"
                          : "none",
                      borderColor: hoveredSkill === skillIndex ? "#10b981" : "",
                    }}
                    onMouseEnter={() => setHoveredSkill(skillIndex)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative mb-2 sm:mb-2.5 md:mb-3 rounded-full p-2 bg-gray-800 flex items-center justify-center transition-all duration-300"
                      style={{
                        transform:
                          hoveredSkill === skillIndex
                            ? "scale(1.1)"
                            : "scale(1)",
                      }}
                    >
                      <Image
                        src={skill.imageUrl}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain transition-all duration-300"
                        style={{
                          filter:
                            hoveredSkill === skillIndex
                              ? "brightness(1.2)"
                              : "brightness(1)",
                        }}
                      />
                    </div>
                    <span className="text-center font-medium text-xs sm:text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;

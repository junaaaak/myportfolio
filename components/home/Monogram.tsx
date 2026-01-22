import { useState } from "react";

interface MonogramProps {
  letter: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const Monogram: React.FC<MonogramProps> = ({
  letter = "R",
  className = "",
  size = "md",
  animated = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size mapping
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12 sm:w-14 sm:h-14",
    lg: "w-16 h-16 sm:w-20 sm:h-20",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layers */}
      <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm"></div>
      <div
        className={`absolute inset-0 rounded-full border border-emerald-500/30 transition-all duration-300 ${
          isHovered ? "border-emerald-400/60 scale-105" : ""
        }`}
      ></div>

      {/* Inner glow */}
      <div
        className={`absolute inset-1 rounded-full bg-emerald-900/5 blur-sm transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Stylized R with lotus/chakra elements - representing spiritual meaning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={`w-3/4 h-3/4 transition-all duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {/* Lotus/chakra-inspired background */}
          <g
            className={`transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-70"
            }`}
          >
            {/* Petals/rays - representing the senses */}
            {[...Array(6)].map((_, i) => (
              <path
                key={i}
                d={`M 50 50 L ${50 + 35 * Math.cos((i * Math.PI) / 3)} ${
                  50 + 35 * Math.sin((i * Math.PI) / 3)
                } A 35 35 0 0 1 ${
                  50 + 35 * Math.cos(((i + 1) * Math.PI) / 3)
                } ${50 + 35 * Math.sin(((i + 1) * Math.PI) / 3)} Z`}
                fill="url(#petalGradient)"
                opacity="0.3"
                className="animate-petal-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>

          {/* Stylized V */}
          <g transform="translate(50, 50) scale(0.5) translate(-50, -45)">
            <path
              d="M20,20 L50,70 L80,20 L65,20 L50,50 L35,20 Z"
              fill="url(#letterGradient)"
              className="animate-letter-draw"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#10b981"
              strokeWidth="3"
            />
          </g>

          {/* Center dot - representing control/mastery */}
          <circle
            cx="50"
            cy="50"
            r="5"
            fill="url(#centerGradient)"
            className={`transition-all duration-300 ${
              isHovered ? "animate-center-pulse" : ""
            }`}
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="petalGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="letterGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient
              id="centerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated rings */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#monogramGradient)"
          strokeWidth="1.5"
          strokeDasharray="283"
          strokeDashoffset="283"
          className="animate-monogram-draw"
        />

        {/* Inner ring - appears on hover */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="url(#monogramGradient2)"
          strokeWidth="1"
          strokeDasharray="239"
          strokeLinecap="round"
          style={{
            strokeDashoffset: isHovered ? "0" : "239",
            transition: "stroke-dashoffset 0.6s ease-out",
          }}
        />

        {/* Five dots representing the five senses */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx={50 + 45 * Math.cos((i * 2 * Math.PI) / 5 - Math.PI / 2)}
            cy={50 + 45 * Math.sin((i * 2 * Math.PI) / 5 - Math.PI / 2)}
            r="2"
            fill="#10b981"
            className="animate-monogram-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient
            id="monogramGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            id="monogramGradient2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particle effects on hover */}
      {isHovered && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-monogram-particle"
              style={{
                left: `${50 + Math.cos((i / 6) * Math.PI * 2) * 50}%`,
                top: `${50 + Math.sin((i / 6) * Math.PI * 2) * 50}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Monogram;

import { useState, useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

// Characters to use for the cryptic effect - using more matrix-like characters
const crypticChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`";

interface CrypticNameProps {
  text: string;
  className?: string;
}

const CrypticName: React.FC<CrypticNameProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [letterStates, setLetterStates] = useState<string[]>([]);
  const intervalRefs = useRef<{ [key: number]: NodeJS.Timeout }>({});

  // Typewriter effect
  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
        setLetterStates((prev) => [...prev, text[displayText.length]]);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [displayText, text]);

  // Handle cryptic effect on hover
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);

    // Clear any existing interval for this index
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
    }

    // Original character
    const originalChar = text[index];
    let iterations = 0;
    const maxIterations = 10; // Number of changes before settling back to original

    // Start cryptic animation
    intervalRefs.current[index] = setInterval(() => {
      if (iterations >= maxIterations) {
        // Return to original character after several iterations
        setLetterStates((prev) => {
          const newStates = [...prev];
          newStates[index] = originalChar;
          return newStates;
        });
        clearInterval(intervalRefs.current[index]);
        return;
      }

      setLetterStates((prev) => {
        const newStates = [...prev];
        const randomChar =
          crypticChars[Math.floor(Math.random() * crypticChars.length)];
        newStates[index] = randomChar;
        return newStates;
      });

      iterations++;
    }, 100);
  };

  const handleMouseLeave = (index: number) => {
    // Clear the interval when not hovering
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);

      // Reset to original character
      setLetterStates((prev) => {
        const newStates = [...prev];
        newStates[index] = text[index];
        return newStates;
      });
    }

    setHoveredIndex(null);
  };

  return (
    <h1
      className={`${className} ${orbitron.className} tracking-tight`}
    >
      {displayText.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className="inline-block">
            {"\u00A0"}
          </span>
        ) : (
          <span
            key={index}
            className="inline-block transition-all duration-200 hover:text-emerald-400"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {letterStates[index] || char}
          </span>
        )
      )}
    </h1>
  );
};

export default CrypticName;

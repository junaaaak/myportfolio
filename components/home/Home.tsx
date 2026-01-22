"use client";

import { useState, useEffect } from "react";
import CrypticName from "./CrypticName";
import SubText from "./SubText";
import AnimatedButton from "./AnimatedButton";
import Monogram from "./Monogram";
import ParticleField from "./ParticleField";

const Home = () => {
  const fullTitle = "Vishal Junak Das";
  const fullSubtext = "i can teach your data to tell its most profitable story.";
  const [startSubtext, setStartSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Start subtext animation after title is expected to finish
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setStartSubtext(true);
      },
      fullTitle.length * 150 + 800
    ); // Approximate time for name to finish + buffer

    return () => clearTimeout(timeout);
  }, []);

  // Mouse following effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Digital clock effect - client-side only to avoid hydration errors
  useEffect(() => {
    // Set initial time
    updateTime();

    // Update time every second
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update time and date in a consistent format
  const updateTime = () => {
    const now = new Date();

    // Format time as HH:MM:SS
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}:${seconds}`);

    // Format date consistently for both server and client
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    setCurrentDate(now.toLocaleDateString("en-US", options));
  };

  // Handler for when subtext animation completes
  const handleSubtextComplete = () => {
    // Show button after subtext animation is complete
    setTimeout(() => {
      setShowButton(true);
    }, 500); // Small delay before showing button
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      {/* Interactive Particle Field */}
      <div className="absolute inset-0 z-0">
        <ParticleField count={50} />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-900/10 blur-[100px] pointer-events-none"></div>

      {/* Mouse following effect */}
      <div
        className="fixed w-40 h-40 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
          transition: "transform 0.2s ease-out",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Monogram in top left */}
      <div className="absolute top-6 left-6 z-20">
        <Monogram letter="V" size="md" animated={false} />
      </div>

      <article className="flex flex-col items-center justify-center w-full h-full z-10">
        {/* Cryptic Name Component - Improved proportions */}
        <div className="relative">
          <CrypticName
            text={fullTitle}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] uppercase leading-none bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent font-extrabold drop-shadow-md"
          />

          {/* Subtle line decoration */}
          <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 w-full flex justify-center">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          </div>
        </div>

        {/* Subtext Component - Improved proportions */}
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center">
          <SubText
            text={fullSubtext}
            startAnimation={startSubtext}
            onComplete={handleSubtextComplete}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-center"
          />
        </div>

        {/* Button Component */}
        <AnimatedButton
          href="/about"
          text="About me"
          show={showButton}
          className="border border-emerald-500/70 rounded-full p-1.5 sm:p-2 px-3 sm:px-4 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg hover:bg-emerald-500/10 transition-colors duration-300"
        />
      </article>

      {/* Digital Clock - Only rendered client-side */}
      {currentTime && (
        <div className="absolute bottom-6 left-6 z-20">
          <div className="bg-black/30 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 shadow-lg shadow-emerald-900/10">
            <div className="text-emerald-400 font-mono text-xl sm:text-2xl tracking-widest">
              {currentTime}
            </div>
            <div className="text-gray-400 text-xs mt-1 text-center">
              {currentDate}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import Link from "next/link";

interface SubTextProps {
  text: string;
  startAnimation: boolean;
  onComplete: () => void;
  className?: string;
}

const SubText: React.FC<SubTextProps> = ({
  text,
  startAnimation,
  onComplete,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const prefix = "i can teach your data to ";
  const location = "tell its most profitable story.";

  useEffect(() => {
    if (startAnimation && displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 40);

      return () => clearTimeout(timeout);
    } else if (startAnimation && displayText.length === text.length) {
      // Notify parent component that animation is complete
      onComplete();
    }
  }, [displayText, text, startAnimation, onComplete]);

  // Determine if we should show the full text with link or just the typed portion
  const showFullPrefix = displayText.length >= prefix.length;
  const locationTyped = displayText.slice(prefix.length);

  return (
    <span className={`relative ${className} tracking-wide font-light`}>
      {showFullPrefix ? (
        <>
          {prefix}
          {locationTyped.length === location.length ? (
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0821775,72.716378,70857m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559!16zL20vMDR2bXA?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
              className="hover:underline underline-offset-2"
            >
              {location}
            </Link>
          ) : (
            locationTyped
          )}
        </>
      ) : (
        displayText
      )}
    </span>
  );
};

export default SubText;

import Link from "next/link";
import { useState, useEffect } from "react";

interface AnimatedButtonProps {
  href: string;
  text: string;
  show: boolean;
  className?: string;
  download?: string | boolean; // Prop to trigger download behavior
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  text,
  show,
  className = "",
  download,
}) => {
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (show && opacity < 1) {
      const timeout = setTimeout(() => {
        setOpacity((prev) => Math.min(prev + 0.1, 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [show, opacity]);

  if (!show) return null;

  // Shared styles and event handlers to keep the component DRY
  const commonProps = {
    className: `relative overflow-hidden transition-all duration-500 flex items-center justify-center ${className}`,
    style: {
      opacity,
      background: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
      transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      boxShadow: isHovered ? "0 10px 20px rgba(0, 0, 0, 0.2)" : "none",
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const content = (
    <>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: isHovered ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.5s ease-out",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
          opacity: isHovered ? 1 : 0,
        }}
      />
      <span
        className="absolute inset-0 z-0"
        style={{
          boxShadow: isHovered
            ? "0 0 15px 5px rgba(255, 255, 255, 0.3) inset"
            : "none",
          transition: "all 0.5s ease",
          opacity: isHovered ? 1 : 0,
        }}
      />
    </>
  );

  // If download prop exists, use a standard <a> tag
  if (download) {
    return (
      <a href={href} download={download} {...commonProps}>
        {content}
      </a>
    );
  }

  // Otherwise, use Next.js Link for internal navigation
  return (
    <Link href={href} {...commonProps}>
      {content}
    </Link>
  );
};

export default AnimatedButton;

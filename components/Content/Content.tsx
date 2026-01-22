import { Slider } from "@/store/useSlider";
import styles from "./Content.module.scss";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  slider: Slider;
};

const Content = ({ children, slider }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Debug scroll behavior
  useEffect(() => {
    if (contentRef.current) {
      console.log("Content height:", contentRef.current.scrollHeight);
      console.log("Viewport height:", window.innerHeight);
    }
  }, [children]);

  return (
    <div
      className={styles.mainWrapper}
      style={{
        top: !slider ? 0 : slider === "navigation" ? "50px" : "-50px",
        right: slider ? "200px" : 0,
        borderTopRightRadius: !slider
          ? 0
          : slider === "navigation"
            ? "50px"
            : "0px",
        borderBottomRightRadius: !slider
          ? 0
          : slider === "socials"
            ? "50px"
            : "0px",
        backgroundColor: "black", // Ensure background color is set
        overflow: "hidden", // Hide the overflow including scrollbar
      }}
    >
      <div ref={contentRef} className={styles.contentInner}>
        {children}
      </div>
    </div>
  );
};

export default Content;

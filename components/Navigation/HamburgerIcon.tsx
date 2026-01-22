import { Slider } from "@/store/useSlider";
import "./Hamburger.css";
import { useRef, useEffect } from "react";

type Props = {
  slider: Slider;
  onClick: () => void;
  setOpenedBy: () => void;
};

const HamburgerIcon = ({ slider, onClick, setOpenedBy }: Props) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = slider === "navigation";
    }
  }, [slider]);

  if (slider === "socials") return null;

  return (
    <div className="navbar">
      <div className="container nav-container">
        <input
          ref={checkboxRef}
          className="checkbox"
          type="checkbox"
          onClick={() => {
            onClick();
            setOpenedBy();
          }}
        />
        <div className="hamburger-lines">
          <span
            className={`line line1 ${
              slider === "navigation" ? "!bg-black" : "!bg-white"
            }`}
          ></span>
          <span
            className={`line line2 ${
              slider === "navigation" ? "!bg-black" : "!bg-white"
            }`}
          ></span>
          <span
            className={`line line3 ${
              slider === "navigation" ? "!bg-black" : "!bg-white"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;

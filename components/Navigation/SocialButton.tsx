import { Slider } from "@/store/useSlider";
import styles from "./SocialButton.module.scss";
import { useRef, useEffect } from "react";

type Props = {
  slider: Slider;
  onClick: () => void;
  setOpenedBy: () => void;
};

const SocialButton = ({ slider, onClick, setOpenedBy }: Props) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.classList.toggle("active", slider === "socials");
    }
  }, [slider]);

  if (slider === "navigation") return null;

  return (
    <div className={styles.socialButtonWrapper}>
      <div
        ref={buttonRef}
        className={styles.socialButton}
        onClick={() => {
          onClick();
          setOpenedBy();
        }}
      >
        <div className={styles.iconWrapper}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <span className={styles.label}>Connect</span>
      </div>
    </div>
  );
};

export default SocialButton;

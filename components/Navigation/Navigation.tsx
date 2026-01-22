import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./Navigation.module.scss";
import { OpenedBy, useSlider } from "@/store/useSlider";

type Props = {
  openedBy: OpenedBy;
};

const Navigation = ({ openedBy }: Props) => {
  const { setSlider } = useSlider();

  const handleLinkClick = () => {
    setSlider(null);
  };

  return (
    <div
      className={`${styles.wrapper} ${
        openedBy === "navigation" ? "justify-start" : "justify-end"
      }`}
    >
      {/* Animated particles background */}
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      <NavigationLinks openedBy={openedBy} onLinkClick={handleLinkClick} />
      <SocialLinks openedBy={openedBy} onLinkClick={handleLinkClick} />
    </div>
  );
};

export default Navigation;

const NavigationLinks = ({
  openedBy,
  onLinkClick,
}: {
  openedBy: OpenedBy;
  onLinkClick: () => void;
}) => {
  const pathname = usePathname();

  if (openedBy === "socials") return null;

  return (
    <div className={styles.navigationLinksWrapper}>
      {links.map((link, index) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            href={link.href}
            key={index}
            className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

const SocialLinks = ({
  openedBy,
  onLinkClick,
}: {
  openedBy: OpenedBy;
  onLinkClick: () => void;
}) => {
  if (openedBy === "navigation") return null;

  return (
    <div className={styles.socialLinksWrapper}>
      {socials.map((link, index) => (
        <Link
          href={link.href}
          target="_blank"
          key={index}
          className={styles.navLink}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
   name: "Courses",
    href: "/certifications",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    name: "Github",
    href: "https://github.com/junaaaak",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishaljunakdas/",
  },
  {
    name: "X",
    href: "https://x.com/vishaljunakdas",
  },
  {
    name: "Mail",
    href: "mailto:vishaljunak31@gmail.com",
  },
];

"use client";

import Navigation from "@/components/Navigation/Navigation";
import HamburgerIcon from "@/components/Navigation/HamburgerIcon";
import SocialButton from "@/components/Navigation/SocialButton";
import Content from "@/components/Content/Content";
import { useSlider } from "@/store/useSlider";

type Props = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: Props) {
  const { slider, setSlider, openedBy, setOpenedBy } = useSlider();

  return (
    <div className="relative">
      <Navigation openedBy={openedBy} />
      <HamburgerIcon
        slider={slider}
        onClick={() => setSlider(slider === null ? "navigation" : null)}
        setOpenedBy={() => setOpenedBy("navigation")}
      />
      <SocialButton
        slider={slider}
        onClick={() => setSlider(slider === null ? "socials" : null)}
        setOpenedBy={() => setOpenedBy("socials")}
      />
      <Content slider={slider}>{children}</Content>
    </div>
  );
}

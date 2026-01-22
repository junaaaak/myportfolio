import { create } from "zustand";

export type OpenedBy = "navigation" | "socials";
export type Slider = OpenedBy | null;

type Store = {
  slider: Slider;
  setSlider: (state: Slider) => void;
  openedBy: OpenedBy;
  setOpenedBy: (state: OpenedBy) => void;
};

export const useSlider = create<Store>()((set) => ({
  slider: null,
  setSlider: (state) => set(() => ({ slider: state })),
  openedBy: "navigation",
  setOpenedBy: (state) => set(() => ({ openedBy: state })),
}));

import Home from "@/components/home/Home";
import { defaultMetadata } from "@/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Home | Portfolio",
};

export default function Page() {
  return <Home />;
}

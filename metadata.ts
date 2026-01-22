import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Vishal | Portfolio",
  description:
    "Professional portfolio showcasing my work, skills, and experience as a developer",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "projects",
    "Software Engineer",
  ],
  authors: [{ name: "Vishal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-curator.vercel.app/",
    title: "Vishal | Portfolio",
    description:
      "Professional portfolio showcasing my work, skills, and experience as a Software Engineer",
    siteName: "Vishal Portfolio",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal | Portfolio",
    description:
      "Professional portfolio showcasing my work, skills, and experience as a Software Engineer",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

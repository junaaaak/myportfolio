import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { Metadata } from "next";
import { defaultMetadata } from "@/metadata";
import ClientLayout from "@/components/home/client-layout";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={GeistMono.className}>
      <head>
        <link rel="canonical" href="https://portfolio-curator.vercel.app/" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

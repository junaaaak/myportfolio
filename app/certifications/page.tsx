"use client";

import Certifications from "@/components/about/Certifications";
import Monogram from "@/components/home/Monogram";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/">
          <Monogram letter="V" size="md" animated={false} />
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Courses
        </h1>
      </div>

      <Certifications />
    </div>
  );
}

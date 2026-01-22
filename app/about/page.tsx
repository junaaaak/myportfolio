"use client";

import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import Education from "@/components/about/Education";
import Monogram from "@/components/home/Monogram";
import Link from "next/link";
import Image from "next/image";

const Tech = ({ text }: { text: string }) => (
  <span className="text-emerald-400 hover:underline underline-offset-2">
    {text}
  </span>
);

export default function Page() {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/">
          <Monogram letter="V" size="md" animated={false} />
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          About Me
        </h1>
      </div>

      <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col-reverse md:flex-row gap-8 items-start">
        <div className="flex-1">
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
            I am a Data Science undergraduate with a strong foundation in mathematics,
            statistics, and machine learning, currently pursuing a BS in Data Science
            (Honors) and Mathematics. My core strengths lie in applying{" "}
            <Tech text="Machine Learning" />, <Tech text="Statistical Analysis" />, and{" "}
            <Tech text="Data Structures" /> to solve real-world problems using{" "}
            <Tech text="Python" />, <Tech text="SQL" />, and modern data science
            frameworks.
          </p>

          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
            I have hands-on experience working with{" "}
            <Tech text="Scikit-learn" />, <Tech text="TensorFlow" />,{" "}
            <Tech text="Keras" />, and{" "}
            <Tech text="Pandas" />, and have built end-to-end projects ranging from
            customer churn prediction using ensemble learning to computer vision–based
            chromatic analysis for malaria parasite classification. I also enjoy
            translating analytical insights into business impact through dashboards and
            data-driven storytelling.
          </p>

          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
            Driven by curiosity and problem-solving, I thrive at the intersection of
            mathematics, data, and decision-making—whether it’s supporting research at{" "}
            <Tech text="Indian Statistical Institute" />, building predictive models, or
            exploring emerging applications of AI in real-world systems.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/images/photo.jpg"
            alt="Profile photo"
            width={350}
            height={350}
            className="rounded-full border border-emerald-500/30 shadow-lg object-cover"
          />
        </div>
      </div>

      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

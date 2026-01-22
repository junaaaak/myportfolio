import { StaticImageData } from "next/image";
import hrDashboard from "../public/images/hrdashboard.png";

type Project = {
  name: string;
  image?: StaticImageData;
  description: string;
  technologies: string[];
  code_link?: string;
  demo_link?: string;
  in_progress?: boolean;
  type?: "Professional" | "Personal" | "Academic";
};

export const projects: Project[] = [
  {
    name: "HSV-Based Chromatic Analysis of Malaria Parasites",
    description:
      "A computer vision research project focused on automating the detection and life-stage classification of Plasmodium parasites from Giemsa-stained blood smear images. The workflow uses HSV color-space thresholding instead of traditional RGB segmentation to isolate parasitic regions. Quantitative features such as area, integrated density, and solidity were extracted to classify parasite life stages (Ring, Trophozoite, Schizont), highlighting the potential for automated diagnostic support systems.",
    technologies: [
      "Python",
      "OpenCV",
      "ImageJ (Fiji)",
      "Computer Vision",
    ],
    demo_link: "https://drive.google.com/file/d/1sEgYhgtKVVu9CAReyfGh2DtTImLIgtWY/view?usp=sharing",
    type: "Academic",
  },
  {
    name: "Customer Analytics Using Principle of Inclusion–Exclusion",
    description:
      "A business intelligence project applying the Principle of Inclusion and Exclusion (PIE) to customer analytics for accurately measuring unique customer reach across multiple marketing campaigns. The project addresses overcounting through a rigorous mathematical framework, using a synthetic marketing dataset to demonstrate how combinatorial techniques from discrete mathematics can enhance the reliability of campaign performance evaluation and strategic decision-making.",
    technologies: [
      "Python",
      "Mathematics",
      "Business Intelligence",
    ],
    demo_link: "https://drive.google.com/file/d/1liyUv-x5MRVH6LiDNUxBKUDhHBckb9k4/view?usp=sharing",
    type: "Academic",
  },
  {
  name: "IMDB Sentiment Analysis with LSTM",
  description:
    "A deep learning project that performs sentiment analysis on the IMDB movie reviews dataset using Long Short-Term Memory (LSTM) neural networks. This repository builds and compares two models—a simple LSTM and a bidirectional LSTM with dropout—covering preprocessing, training, evaluation (confusion matrices & accuracy plots), and visualization of results.",
  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "LSTM",
    "Bidirectional LSTM",
  ],
  demo_link: "https://github.com/junaaaak/imdb_lstm",
  type: "Academic",
},
  {
    name: "C Attendance Companion",
    description:
      "A C-based program designed to help students track and manage attendance across multiple subjects. It allows users to input attendance records, calculate attendance percentages, and determine the number of classes required to meet target attendance criteria.",
    technologies: [
      "C",
    ],
    code_link: "https://github.com/junaaaak/C-Attendance-Companion-Code",
    type: "Academic",
  },
  {
    name: "Human Resources Dashboard",
    image: hrDashboard,
    description:
      "An interactive HR analytics dashboard built using a global human resources dataset. The project involved data cleaning, analysis, and visualization of approximately 1600 records to derive actionable insights for improving HR strategies and decision-making.",
    technologies: [
      "Microsoft Excel",
    ],
    demo_link: "https://github.com/junaaaak/hr_dataset_excel",
    type: "Academic",
  },
  {
    name: "Swiggy EDA",
    description:
      "An exploratory data analysis project on a Swiggy restaurant dataset sourced from Kaggle. The project focused on data cleaning, analysis, and answering business-driven questions related to restaurant ratings, delivery times, cuisines, locations, and discounts.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    code_link: "https://github.com/junaaaak/swiggyEDA",
    type: "Academic",
  },
  {
    name: "Impact of Swachh Bharat Abhiyan on Urban Sanitation",
    description:
      "A statistical research project evaluating the effectiveness of the Swachh Bharat Abhiyan in improving urban sanitation and community well-being. The study involved data collection, statistical analysis, and interpretation to assess the social and public health impact of the initiative.",
    technologies: [
      "Statistics",
      "Microsoft Excel",
    ],
    demo_link: "https://drive.google.com/file/d/1KcxsPlQ5Koqat_tM9NQKcJQjkYCMJiJc/view",
    type: "Academic",
  },
];

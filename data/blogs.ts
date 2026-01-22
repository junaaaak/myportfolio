type Blog = {
  id: string;
  title: string;
  description: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
};

export const blogs: Blog[] = [
  {
    id: "1",
    title: "How to Back Up and Save All Your Snapchat Memories Before the 5GB Limit Takes Effect",
    description:
      "In this guide, I show how to download and back up all your Snapchat Memories so you can store them safely on your personal cloud or local hard drive.",
    category: "Tech",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    tags: ["Snapchat", "Backup", "Cloud Storage"],
    link: "https://medium.com/@junaaak/how-to-back-up-and-save-all-your-snapchat-memories-before-the-5gb-limit-takes-effect-5f29c9992f6e",
  },
  {
    "id": "2",
    "title": "Agentic Context Engineering: A Formal Step Toward Self-Improving Language Model Cognition",
    "description":
      "An introduction to the Agentic Context Engineering framework, proposing a way for AI systems to build and refine context over time for more coherent cognition.",
    "category": "AI",
    "date": "Oct 19, 2025",
    "readTime": "3 min read",
    "tags": ["AI", "Context Engineering", "LLMs"],
    "link": "https://medium.com/@junaaak/agentic-context-engineering-a-formal-step-toward-self-improving-language-model-cognition-fc67634366ea"
  },
  {
    "id": "3",
    "title": "zubeen garg — a concept",
    "description":
      "A personal reflective piece about the impact of Assamese singer Zubeen Garg’s music and how it shaped the author’s emotional landscape.",
    "category": "Personal",
    "date": "Sep 20, 2025",
    "readTime": "5 min read",
    "tags": ["Music", "Reflection", "Assamese Culture"],
    "link": "https://medium.com/@junaaak/zubeen-garg-a-concept-fef9ce3f8f15"
  },
  {
    "id": "4",
    "title": "Beaming Bucks: How PayPal Started on Palm Pilots (Yes, Really!)",
    "description":
      "A historical exploration of how PayPal used Palm Pilot infrared technology to transmit payments in its earliest days.",
    "category": "Tech",
    "date": "Jun 7, 2025",
    "readTime": "4 min read",
    "tags": ["PayPal", "Tech History", "Startups"],
    "link": "https://medium.com/@junaaak/beaming-bucks-how-paypal-started-on-palm-pilots-yes-really-bc0204bb244a"
  },
  {
    "id": "5",
    "title": "The Lazy Brain Epidemic: LLMs and the Death of Deep Thinking",
    "description":
      "An examination of how increased reliance on large language models may be eroding deep thinking skills in academic and creative contexts.",
    "category": "AI",
    "date": "Nov 9, 2024",
    "readTime": "3 min read",
    "tags": ["AI", "Education", "Cognition"],
    "link": "https://medium.com/@junaaak/the-lazy-brain-epidemic-llms-and-the-death-of-deep-thinking-6f02eca17c72"
  },
  {
    "id": "6",
    "title": "The Drunkard’s Walk: A Mathematical Stroll Through Randomness",
    "description":
      "An exploration of the mathematical concept of random walks and its implications in probability, physics, and life’s unpredictability.",
    "category": "Math",
    "date": "Oct 24, 2024",
    "readTime": "4 min read",
    "tags": ["Math", "Probability", "Randomness"],
    "link": "https://medium.com/@junaaak/the-drunkards-walk-a-mathematical-stroll-through-randomness-cc9d1a69b800"
  },
  {
    "id": "7",
    "title": "Exploring Google Gemini AI: A Comprehensive Review on Pixel Phones",
    "description":
      "A review of Google’s Gemini AI on Pixel phones, covering its features, capabilities, and potential limitations.",
    "category": "Tech",
    "date": "Feb 20, 2024",
    "readTime": "3 min read",
    "tags": ["Google Gemini", "AI", "Pixel Phones"],
    "link": "https://medium.com/@junaaak/exploring-google-gemini-ai-a-comprehensive-review-on-pixel-phones-3af9c8fe8ccd"
  },
  {
    "id": "8",
    "title": "The Disaster Batch",
    "description":
      "A first-hand account and reflection on students adapting to exam cancellations during the COVID-19 pandemic and their resilience in adversity.",
    "category": "Personal",
    "date": "Apr 7, 2023",
    "readTime": "5 min read",
    "tags": ["Education", "Pandemic", "Student Life"],
    "link": "https://medium.com/@junaaak/the-disaster-batch-969ed1a297e9"
  },
  {
    "id": "9",
    "title": "Science and Superstitions in India",
    "description":
      "A cultural and scientific look at the origins of superstitious beliefs in India and how they contrast with scientific reasoning.",
    "category": "Culture",
    "date": "Oct 18, 2021",
    "readTime": "4 min read",
    "tags": ["Science", "Superstition", "India"],
    "link": "https://medium.com/@junaaak/science-and-superstitions-in-india-d158f10c4afd"
  },
  {
    "id": "10",
    "title": "The Dilemma — SEBA-AHSEC, Corona and Cancellation of Examinations",
    "description":
      "A reflective essay on how the COVID-19 pandemic affected school examinations in India, focusing on student anxiety and systemic challenges.",
    "category": "Personal",
    "date": "Oct 14, 2021",
    "readTime": "4 min read",
    "tags": ["Education", "COVID-19", "Reflection"],
    "link": "https://medium.com/@junaaak/the-dilemma-seba-ahsec-corona-and-cancellation-of-examinations-969ed1a297e9"
  }
];

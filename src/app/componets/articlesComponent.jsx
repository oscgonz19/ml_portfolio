"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

/* ─────────── Arrows ─────────── */
const PrevArrow = ({ onClick }) => (
  <button
    aria-label="Previous slide"
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
  >
    <FaArrowLeft className="text-white text-lg" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    aria-label="Next slide"
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
  >
    <FaArrowRight className="text-white text-lg" />
  </button>
);

/* ─────────── Article data ─────────── */
const articles = [
  {
    title: "Python: Reign of the Snake",
    description:
      "Amid the vast universe of programming languages, Python stands out as a symbol of simplicity and versatility—powerful, elegant and ubiquitous.",
    author: "Óscar Antonio González",
    readingTime: "5 min read",
    imageUrl: "/python.jpg",
    link: "https://www.linkedin.com/pulse/python-la-hegemon%25C3%25ADa-de-serpiente-%25C3%25B3scar-antonio-gonz%25C3%25A1lez-z9kue/",
  },
  {
    title: "The Cloud That Holds It All",
    description:
      "Every click, every scroll, every purchase is a drop feeding an endless torrent. Welcome to Big Data—the realm where information flows ceaselessly.",
    author: "Óscar Antonio González",
    readingTime: "4 min read",
    imageUrl: "/nube.jpg",
    link: "https://www.linkedin.com/pulse/la-nube-que-todo-lo-sostiene-ia-y-el-procesamiento-masivo-gonz%25C3%25A1lez-anfje/",
  },
  {
    title: "Sailing an Ocean of Data",
    description:
      "With the relentless expansion of the internet, the ability to mine insight from massive datasets is more crucial than ever.",
    author: "Óscar Antonio González",
    readingTime: "6 min read",
    imageUrl: "/faro.jpg",
    link: "https://www.linkedin.com/pulse/explorando-la-ciencia-de-datos-transformando-el-mar-en-gonz%25C3%25A1lez-q5yke/",
  },
  {
    title: "The Art of Personalization",
    description:
      "Recommender systems harness AI to suggest content by learning from user behavior and the preferences of similar audiences.",
    author: "Óscar Antonio González",
    readingTime: "5 min read",
    imageUrl: "/recommend.png",
    link: "https://www.linkedin.com/pulse/sistemas-recomendadores-el-arte-de-la-personalizaci%25C3%25B3n-gonz%25C3%25A1lez-uqfwe/",
  },
  {
    title: "Visualizing Data for Insight",
    description:
      "Data visualization transforms numbers into strategic decisions—turning raw tables into stories that drive action.",
    author: "Óscar Antonio González",
    readingTime: "5 min read",
    imageUrl: "/dataviz.png",
    link: "https://www.linkedin.com/pulse/la-visualizaci%25C3%25B3n-de-datos-en-ciencia-transformando-n%25C3%25BAmeros-gonz%25C3%25A1lez-g1uee/",
  },
];

/* ─────────── Render helper ─────────── */
const renderArticles = () =>
  articles.map((a, i) => (
    <motion.div
      key={i}
      className="flex flex-col bg-black p-6 rounded-lg shadow-lg text-white h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <div className="relative w-full h-60 mb-4">
        <Image
          src={a.imageUrl}
          alt={a.title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold mb-2">{a.title}</h3>
      <p className="text-lg mb-4 flex-grow">{a.description}</p>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-sm text-gray-400">{a.readingTime}</span>
        <Link href={a.link} target="_blank" rel="noopener noreferrer">
          <span className="bg-orange-700 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Read&nbsp;More
          </span>
        </Link>
      </div>
    </motion.div>
  ));

/* ─────────── Component ─────────── */
export default function Articles() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="articles" className="bg-black py-10">
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-serif mb-8 text-center text-white"
        >
          Articles
        </motion.h2>

        <Slider {...settings}>{renderArticles()}</Slider>
      </div>
    </section>
  );
}

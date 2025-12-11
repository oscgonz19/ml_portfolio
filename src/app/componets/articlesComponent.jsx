"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

/* ─────────── Arrows (more polished) ─────────── */
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      aria-label="Previous slide"
      onClick={onClick}
      className="absolute -left-3 top-1/2 -translate-y-1/2 z-10
                 rounded-full border border-white/15 bg-black/70 p-2
                 backdrop-blur-md transition hover:border-white/35 hover:bg-white/10"
    >
      <FaArrowLeft className="text-white/90 text-sm" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      aria-label="Next slide"
      onClick={onClick}
      className="absolute -right-3 top-1/2 -translate-y-1/2 z-10
                 rounded-full border border-white/15 bg-black/70 p-2
                 backdrop-blur-md transition hover:border-white/35 hover:bg-white/10"
    >
      <FaArrowRight className="text-white/90 text-sm" />
    </button>
  );
};

/* ─────────── Article data ───────────
   Ajusta estos títulos con tu evolución:
   idealmente añade 2-3 artículos GeoAI nuevos en 2026.
*/
const articles = [
  {
    title: "Python: Reign of the Snake",
    description:
      "A concise view of why Python remains the backbone of modern AI, data engineering and scientific computing.",
    author: "Óscar Antonio González",
    readingTime: "5 min read",
    imageUrl: "/python.jpg",
    link:
      "https://www.linkedin.com/pulse/python-la-hegemon%25C3%25ADa-de-serpiente-%25C3%25B3scar-antonio-gonz%25C3%25A1lez-z9kue/",
    tag: "Foundations",
  },
  {
    title: "The Cloud That Holds It All",
    description:
      "How cloud-scale thinking unlocks real-world AI systems and data products beyond notebooks.",
    author: "Óscar Antonio González",
    readingTime: "4 min read",
    imageUrl: "/nube.jpg",
    link:
      "https://www.linkedin.com/pulse/la-nube-que-todo-lo-sostiene-ia-y-el-procesamiento-masivo-gonz%25C3%25A1lez-anfje/",
    tag: "Cloud",
  },
  {
    title: "Sailing an Ocean of Data",
    description:
      "From raw data to decisions: structuring pipelines and experiments for robust applied science.",
    author: "Óscar Antonio González",
    readingTime: "6 min read",
    imageUrl: "/faro.jpg",
    link:
      "https://www.linkedin.com/pulse/explorando-la-ciencia-de-datos-transformando-el-mar-en-gonz%25C3%25A1lez-q5yke/",
    tag: "Data",
  },
  {
    title: "The Art of Personalization",
    description:
      "A practical overview of recommenders and the trade-offs that matter in production systems.",
    author: "Óscar Antonio González",
    readingTime: "5 min read",
    imageUrl: "/recommend.png",
    link:
      "https://www.linkedin.com/pulse/sistemas-recomendadores-el-arte-de-la-personalizaci%25C3%25B3n-gonz%25C3%25A1lez-uqfwe/",
    tag: "ML Systems",
  },
  {
    title: "Visualizing Data for Insight",
    description:
      "Turning complex signals into decisions with clean, narrative-driven visual analytics.",
    author: "Óscar Antonio González",
    readingTime: "5 min read",
    imageUrl: "/dataviz.png",
    link:
      "https://www.linkedin.com/pulse/la-visualizaci%25C3%25B3n-de-datos-en-ciencia-transformando-n%25C3%25BAmeros-gonz%25C3%25A1lez-g1uee/",
    tag: "Communication",
  },

  /* ─────────── MOCKUPS que deberías publicar ─────────── */
  {
    title: "GeoAI for Landslide Risk: From DEM to Decisions (Mockup)",
    description:
      "A blueprint for building an end-to-end landslide susceptibility system using terrain features, rainfall proxies and interpretable ML.",
    author: "Óscar Antonio González",
    readingTime: "7 min read",
    imageUrl: "/mockups/geoai-landslide-article.jpg",
    link: "/projects/geoai", // interno por ahora
    tag: "GeoAI • Risk",
  },
  {
    title: "Energy Site Intelligence with GeoML (Mockup)",
    description:
      "How to combine terrain, climate and infrastructure constraints to rank solar and wind sites with explainable scores.",
    author: "Óscar Antonio González",
    readingTime: "6 min read",
    imageUrl: "/mockups/geoai-energy-article.jpg",
    link: "/projects/geoai",
    tag: "GeoAI • Energy",
  },
];

/* ─────────── Card ─────────── */
function ArticleCard({ a, i }) {
  const isExternal = typeof a.link === "string" && a.link.startsWith("http");

  const Wrapper = ({ children }) => {
    if (isExternal) {
      return (
        <a href={a.link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    // internal
    return <a href={a.link}>{children}</a>;
  };

  return (
    <motion.div
      className="h-full px-2"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
    >
      <div
        className="flex flex-col h-full rounded-2xl border border-white/10
                   bg-white/5 p-5 shadow-xl transition
                   hover:border-white/25 hover:bg-white/10"
      >
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
          <Image
            src={a.imageUrl}
            alt={a.title}
            fill
            className="object-cover"
          />
          {a.tag && (
            <div className="absolute top-3 left-3 rounded-full bg-black/70 px-2 py-1
                            text-[10px] font-semibold tracking-wide text-white/90
                            border border-white/15 backdrop-blur">
              {a.tag}
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">
          {a.title}
        </h3>

        <p className="text-sm text-stone-300 mb-4 flex-grow">
          {a.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-stone-500">
            {a.readingTime}
          </span>

          <Wrapper>
            <span
              className="inline-flex items-center justify-center rounded-xl
                         border border-white/15 bg-white/10 px-3 py-1.5
                         text-xs font-semibold text-white/90 transition
                         hover:border-white/35 hover:bg-white/20"
            >
              Read more →
            </span>
          </Wrapper>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── Component ─────────── */
export default function Articles() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="articles" className="bg-black py-16">
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold font-serif mb-10 text-center text-white"
        >
          Insights
        </motion.h2>

        <Slider {...settings}>
          {articles.map((a, i) => (
            <ArticleCard key={`${a.title}-${i}`} a={a} i={i} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
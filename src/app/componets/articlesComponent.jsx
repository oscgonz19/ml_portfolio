import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

// Flecha izquierda
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
    onClick={onClick}
  >
    <FaArrowLeft className="text-white text-lg" />
  </div>
);

// Flecha derecha
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
    onClick={onClick}
  >
    <FaArrowRight className="text-white text-lg" />
  </div>
);

const articles = [
  {
    title: "Python. La Hegemonía de la Serpiente",
    description: "Dentro de este vasto universo de códigos y lenguajes, Python brilla con luz propia, consolidándose no solo como una herramienta poderosa, sino también como un símbolo de simplicidad y versatilidad.",
    author: "Óscar Antonio González",
    readingTime: "5 min de lectura",
    imageUrl: "/python.jpg",
    link: "https://www.linkedin.com/pulse/python-la-hegemon%25C3%25ADa-de-serpiente-%25C3%25B3scar-antonio-gonz%25C3%25A1lez-z9kue/?trackingId=oO29lttNTzmMdsdAE9AQvQ%3D%3D",
  },
  {
    title: "La Nube que Todo lo Sostiene",
    description: "Cada clic, cada scroll y cada compra son gotas que contribuyen a un torrente interminable. Es el mundo del Big Data, un lugar donde la información fluye incesantemente.",
    author: "Óscar Antonio González",
    readingTime: "4 min de lectura",
    imageUrl: "/nube.jpg",
    link: "https://www.linkedin.com/pulse/la-nube-que-todo-lo-sostiene-ia-y-el-procesamiento-masivo-gonz%25C3%25A1lez-anfje/?trackingId=oO29lttNTzmMdsdAE9AQvQ%3D%3D",
  },
  {
    title: "Navegando Un Mar de Datos.",
    description: "Con la expansión constante del internet y el desarrollo tecnológico, la capacidad de extraer conocimientos útiles de grandes volúmenes de datos es más crucial que nunca. ",
    author: "Óscar Antonio González",
    readingTime: "6 min de lectura",
    imageUrl: "/faro.jpg",
    link: "https://www.linkedin.com/pulse/explorando-la-ciencia-de-datos-transformando-el-mar-en-gonz%25C3%25A1lez-q5yke/?trackingId=oO29lttNTzmMdsdAE9AQvQ%3D%3D",
  },
  {
    title: "El Arte De La Personalización",
    description: "Un sistema recomendador es una aplicación de inteligencia artificial que sugiere opciones a los usuarios basándose en sus preferencias y comportamientos previos, así como en datos de otros usuarios con gustos similares.",
    author: "Óscar Antonio González",
    readingTime: "5 min de lectura",
    imageUrl: "/recommend.png",
    link: "https://www.linkedin.com/pulse/sistemas-recomendadores-el-arte-de-la-personalizaci%25C3%25B3n-gonz%25C3%25A1lez-uqfwe/",
  },
  {
    title:"La Visualización de Datos en Ciencia de Datos",
    description: "La visualización de datos es una herramienta poderosa que permite a los científicos de datos transformar números en decisiones estratégicas.",
    author: "Óscar Antonio González",
    readingTime: "5 min de lectura",
    imageUrl: "/dataviz.png",
    link: "https://www.linkedin.com/pulse/la-visualizaci%25C3%25B3n-de-datos-en-ciencia-transformando-n%25C3%25BAmeros-gonz%25C3%25A1lez-g1uee/?trackingId=p88wGJ%2FV%2F5U54gNIRDeRPA%3D%3D",
  },
  // Más artículos...
];

const renderArticles = () => {
  return articles.map((article, index) => (
    <motion.div 
      key={index} 
      className="flex flex-col bg-white p-6 rounded-lg shadow-lg text-gray-800 h-full"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full h-60 mb-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
        <p className="text-lg mb-4 flex-grow">{article.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{article.readingTime}</span>
        </div>
      </div>
      <div className="mt-auto">
        <Link href={article.link} legacyBehavior>
          <a className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out">
            Read More
          </a>
        </Link>
      </div>
    </motion.div>
  ));
};

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-white text-gray-800 py-10">
      <div className="container mx-auto p-5 relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl font-bold font-serif mb-8 text-center text-gray-900"
        >
          Articles
        </motion.h1>
        <Slider {...settings}>
          {renderArticles()}
        </Slider>
      </div>
    </section>
  );
}
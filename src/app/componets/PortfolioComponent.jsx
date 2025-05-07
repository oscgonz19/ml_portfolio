import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const projects = [
  {
    title: 'Automated Financial Analysis using LLM and RAG Techniques',
    description: 'This project leverages advanced techniques in Language Learning Models (LLM) and Retrieval-Augmented Generation (RAG) to streamline and enhance the analysis of financial reports, specifically 10-K and 10-Q filings.',
    imageUrl: '/financialAnalisis.jpg',
    link: 'https://github.com/oscgonz19/Automated-Financial-Analysis-LLM-RAG',
    highlights: [
      'A project that uses LLM and RAG techniques to automate financial analysis.',
      'Aims to streamline and enhance the analysis of financial reports.',
      'Specifically focuses on 10-K and 10-Q filings.'
    ],
    tags: ['Machine Learning', 'Unstructured Data', 'Financial Analysis'],
    category: 'Data Science & Machine Learning'
  },
  {
    title: "Analysis of Machine Learning Models for Breast Cancer Classification",
    description: 'This project compares the performance of supervised and unsupervised machine learning techniques for breast cancer detection. It uses the Wisconsin Breast Cancer dataset to train and evaluate the models.',
    imageUrl: '/pexels-cottonbro.jpg',
    link: 'https://github.com/oscgonz19/BreastCancerDetection/blob/main/AprendizajeSupervisado_NoSupervisado.ipynb',
    highlights: [
      'A project that compares supervised and unsupervised machine learning techniques.',
      'Uses the Wisconsin Breast Cancer dataset to train and evaluate the models.'
    ],
    tags: ['Breast Cancer Detection', 'SciKit-Learn', 'Model Evaluation'],
    category: 'Data Science & Machine Learning'
  },
  {
    title: 'COMPAS: Exploring Bias in Criminal Profiling Management',
    description: 'Analyzed bias in criminal profiling management using the COMPAS dataset. Explored data preprocessing techniques to handle missing data and developed visualizations to illustrate the impact of bias.',
    imageUrl: '/compas.jpg',
    link: 'https://github.com/oscgonz19/fair_scoring_AIF360/blob/main/compass_bias_%26_fairness.ipynb',
    highlights: [
      'Analyzed bias in criminal profiling management using the COMPAS dataset',
      'Explored data preprocessing techniques to handle missing data',
      'Developed visualizations to illustrate the impact of bias'
    ],
    tags: ['Data Analysis', 'Bias Detection', 'Machine Learning'],
    category: 'Data Science & Machine Learning'
  },
  {
    title: 'Monitoring the Financial Market of Psychedelics and Cannabis Using AI',
    description: 'This project uses Langchain to monitor the financial market of psychedelics and cannabis using AI. It leverages OpenAI API and NewsAPI to analyze financial news and provide insights.',
    imageUrl: '/cannabisnews.jpg',
    link: 'https://github.com/oscgonz19/PsyCannaFinance',
    highlights: [
      "Langchain for financial news analysis using OpenAI API and NewsAPI",
      "Exploratory data analysis and visualization for insights",
    ],
    tags: ['LangChain', 'OpenAI', 'Financial News'],
    category: 'Data Engineering'
  },
  {
    title: 'PySpark Docker Redshift',
    description: 'Developed a data pipeline automation system for financial data analysis. The project uses Python and SQL to extract, transform, and load data from various sources for analysis and visualization.',
    imageUrl: '/dataPipeline.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Developed a data pipeline automation system for financial data analysis',
      'Uses Python and SQL to extract, transform, and load data from various sources',
      'Data analysis and visualization for insights'
    ],
    tags: ['Data Pipeline', 'Financial Data Analysis', 'Python', 'SQL'],
    category: 'Data Engineering'
  },
  {
    title: 'Real-time Data Processing with Apache Kafka and Spark',
    description: 'A project that demonstrates real-time data processing using Apache Kafka and Spark. The project uses a sample dataset to simulate real-time data processing and analysis.',
    imageUrl: '/kafka.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Real-time data processing using Apache Kafka and Spark',
      'Sample dataset to simulate real-time data processing and analysis'
    ],
    tags: ['Apache Kafka', 'Apache Spark', 'Real-time Data Processing'],
    category: 'Data Engineering'
  },
  {
    title: 'ML Portfolio built with Next.js and Tailwind CSS',
    description: 'A collection of data science projects that I have worked on over the years.',
    imageUrl: '/wallpaperwebMLgithub.jpg',
    link: 'https://github.com/oscgonz19/ML_portfolio',
    highlights: [
      'A collection of data science projects that I have worked on over the years.',
      'Built with Next.js and Tailwind CSS.',
      'Hosted on Vercel.'
    ],
    tags: ['React.js', 'Frontend', 'Web App'],
    category: 'Web Development'
  },
  {
    title: 'CRUD application built with Nest.js',
    description: 'A simple CRUD application built with NestJs and PostgreSQL.',
    imageUrl: '/nestjs.jpg',
    link: 'https://github.com/oscgonz19/CRUD-NestJs-firstProject-scheme"',
    highlights: [
      'A progressive Node.js framework for building efficient and scalable server-side applications.',
      'Uses TypeScript, a superset of JavaScript that combines type checking and static analysis.',
      'Utilizes PostgreSQL, a powerful, open-source object-relational database system.'
    ],
    tags: ['TypeScript', 'Backend', 'TypeORM', 'PostgreSQL'],
    category: 'Web Development'
  },
  {
    title:'Not Everything Belong To The Sea',
    description: 'Documentary page about the impact of plastic pollution on Colombian coasts .',
    imageUrl: '/NEBTS2.png',
    link: 'github.com/oscgonz19',
    highlights: [
      'A documentary page about the impact of plastic pollution on Colombian coasts.',
      'Built with Next.js and Tailwind CSS.',
      'Hosted on Vercel.'
    ],
    tags: ['React.js', 'Frontend', 'Web App'],
    category: 'Web Development'
  }
];

export default function PortfolioComponent() {
  const [selectedCategory, setSelectedCategory] = useState("Data Science & Machine Learning");

  const renderProjects = () => {
    return projects
      .filter(project => project.category === selectedCategory)
      .map((project, index) => (
        <div 
          key={index} 
          className="bg-white p-4 rounded-lg shadow-md text-black flex flex-col h-full"
        >
          <div className="relative w-full h-40 mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <ul className="list-disc list-inside mb-4 text-gray-600 text-sm">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={project.link} legacyBehavior>
                <a className="text-blue-600 font-semibold hover:underline">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <section className=" text-gray-800 py-10">
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold font-serif mb-8 text-center text-gray-900">
          Projects
        </h1>
        <div className="flex justify-center items-center mb-8 flex-wrap">
          {["Data Science & Machine Learning", "Data Engineering", "Web Development"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mx-2 my-1 rounded-lg font-medium ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
}
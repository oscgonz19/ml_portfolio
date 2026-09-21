'use client';

import { FaClock } from 'react-icons/fa';
import Image from 'next/image';

const Mentorship = () => {
  return (
    <div className="bg-black-100 p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-semibold mb-6">1:1 Advice and Help</h1>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg overflow-hidden shadow-md">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold mb-2">1:1 Mentorship</h2>
          <div className="flex items-center text-gray-700 mb-2">
            <FaClock className="mr-2" />
            <p>30min</p>
          </div>
          <p className="text-2xl font-semibold mb-4 text-black">40 US$</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">Mentorship</button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/public/Profile12.png" // Reemplaza con la ruta de tu imagen
            alt="Mentorship"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;

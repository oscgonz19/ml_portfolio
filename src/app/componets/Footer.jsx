import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
          {/* Iconos de redes sociales */}
          <div className="flex space-x-8 justify-center items-center px-5">
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        <div className= "max-h-screen">
          <p className="text-center mt-2 text-sm text-gray-400">
            
          </p>
        </div>
      </div>
    </footer>
  );
}

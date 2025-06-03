"use client";
import React from "react";
import "../app/globals.css";

// Componentes
import HeroSection from "../app/componets/HeroSection";
import Navbar from "../app/componets/Navbar";
import AreasOfInterest from "../app/componets/AreasOfInterest";
import Profile from "../app/componets/Profile";
import Footer from "../app/componets/Footer";
import PortfolioComponent from "@/app/componets/PortfolioComponent";
import Articles from "../app/componets/articlesComponent";

export default function Home() {
  return (
    <div className="relative inset-0 min-h-screen flex flex-col bg-black">
      {/* Navbar fijo */}
      <div className="sticky top-0 z-50 bg-black shadow-md">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="flex-1">
        <HeroSection />

        <section id="profile" className="section">
          <Profile />
        </section>

        <div className="divider" />

        <section id="areas" className="section">
          <AreasOfInterest />
        </section>

        <div className="divider" />

        <section id="portfolio" className="section">
          <PortfolioComponent />
        </section>

        <div className="divider" />

        <section id="articles" className="section pb-24">
          <Articles />
        </section>
      </main>

      <Footer />
    </div>
  );
}

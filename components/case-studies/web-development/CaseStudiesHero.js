"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CaseStudiesHero = () => {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const title = "GDC Consultants Case Study";
  const titleWords = title.split(" ");

  return (
    <section className="relative h-screen w-full flex items-center text-white overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Snow Animation Background */}
      <div
        id="snow"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      ></div>

      {/* Content */}
      <div
        id="move-down"
        className="relative z-10 w-full container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 pt-20"
      >
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-center md:items-start max-w-full md:max-w-xl space-y-6 text-center md:text-left"
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h5 className="text-xs sm:text-sm md:text-md uppercase tracking-widest font-semibold">
            Driving Results for Engineering Excellence
          </h5>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start"
            variants={leftContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`${word === "Consultants" ? "whitespace-nowrap" : ""}`}
              >
                {word}
                {index < titleWords.length - 1 && " "}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            Discover how GDC Consultants, a leading engineering consultancy in
            New Zealand, transformed their online presence with a modern,
            responsive website. Leveraging advanced technologies like Next.js
            and strategic SEO, GDC Consultants boosted their user engagement
            and achieved significant digital growth.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 sm:gap-6 mt-6 justify-center md:justify-start">
            <motion.button
              className="bg-white text-customYellow px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-auto"
          variants={rightContentVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/assets/images/website-dev/gdc-consultants.webp"
              alt="Google Ads Success"
              className="h-64 sm:h-80 md:h-96 w-auto object-contain"
              width={550}
              height={550}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;

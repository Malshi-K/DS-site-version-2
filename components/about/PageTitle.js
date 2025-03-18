"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const PageTitle = ({
  title = "About Us", // Default title or accept as prop
  onScrollDown,
}) => {
  // Text animation helper
  const animateText = (text, startDelay = 0) => {
    return text.split("").map((char, index) => {
      const display = char === " " ? "\u00A0" : char;
      return (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `fadeIn 0.05s ease forwards`,
            animationDelay: `${(index + startDelay) * 0.1}s`,
            opacity: 0,
          }}
        >
          {display}
        </span>
      );
    });
  };

  return (
    <section className="relative flex items-center justify-center min-h-[500px] text-white">
      {/* Darker Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/global-bg.webp"
          alt={`${title} page title`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {animateText(title)}
          </h1>

          {/* Contact Now Button */}
          <Link
            href="/contact-us"
            className="inline-flex items-center px-10 py-4 bg-customYellow text-black text-xl font-semibold rounded-full hover:bg-customGray transition-all"
          >
            <span className="mr-2">←</span> CONTACT NOW
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={onScrollDown}
      >
        <div className="flex items-center justify-center w-20 h-20 bg-customYellow rounded-full">
          <ChevronDoubleDownIcon className="h-8 w-8 text-black" />
        </div>
      </motion.div>
      
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PageTitle;
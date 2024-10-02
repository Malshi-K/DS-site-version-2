"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid"; // Importing Heroicons
import { motion } from "framer-motion"; // Importing framer-motion
import Image from "next/image";

const Header = () => {
  // State to handle dropdown visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling

  // Handlers for opening and closing dropdowns on hover
  const handleMouseEnter = (setter) => {
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    setter(false);
  };

  // Scroll event listener to detect scroll and change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Starts off the screen above
      animate={{ y: 0, opacity: 1 }} // Slides down into view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`} // Toggle background color based on scroll state
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-20">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/Digital Solution.png" // Replace with the actual path to your logo image
            alt="GDC Digital Solutions Logo"
            width={500} // Set a default width, as Next.js requires it (you can adjust as needed)
            height={500} // Set a default height (you can adjust as needed)
            className="h-20 w-auto" // Keep your original Tailwind CSS classes
            priority // Optional: If this image is important for loading, you can add priority
          />
        </Link>

        <nav className="flex space-x-10 relative">
          <Link
            href="#top"
            className="text-customGray hover:text-white text-xl font-bold"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
            onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
          >
            <button className="flex items-center text-customGray hover:text-white text-xl font-bold focus:outline-none">
              Services
              <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
            </button>
            {isServicesOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-transparent rounded-xl shadow-xl p-6 flex space-x-6 z-50"
                style={{ minWidth: "800px" }}
              >
                <Link
                  href="/services/development"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <CodeBracketIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Website Development</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Build professional and engaging websites.
                  </span>
                </Link>

                <Link
                  href="/services/google-ads"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <CurrencyDollarIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Google Ads</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Optimize your ads to reach the right audience.
                  </span>
                </Link>

                <Link
                  href="/services/seo"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <ChartBarIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">SEO / Copywriting</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Enhance your content for better search rankings.
                  </span>
                </Link>

                <Link
                  href="/services/nfc-cards"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <LightBulbIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">NFC Cards</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Innovate with contactless technology.
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIsAboutOpen)}
            onMouseLeave={() => handleMouseLeave(setIsAboutOpen)}
          >
            <button className="flex items-center text-customGray hover:text-white text-xl font-bold focus:outline-none">
              About Us
              <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent rounded-xl shadow-xl">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-700 hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  href="#careers"
                  className="block px-4 py-2 text-gray-700 hover:text-white"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>
          <Button className="border-2 border-customGray bg-transparent text-customGray hover:bg-transparent hover:border-white hover:text-white px-6 py-2 rounded-full text-xl font-bold transition-colors duration-300">
            Contact Now
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

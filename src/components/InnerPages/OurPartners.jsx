import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const PartnersPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const partners = [
    {
      category: "Concept Owner",
      logo: "/assets/crossby.png",
      alt: "Concept Owner Logo",
    },
    {
      category: "Branding Partner",
      logo: "/assets/switch.jpeg",
      alt: "Swatch Social Logo",
    },
    {
      category: "Tech Partner",
      logo: "/assets/vulture.jpg",
      alt: "Vulture Lines Logo",
    },
    {
      category: "Event Partner",
      logo: "/assets/behind.jpeg",
      alt: "Behind the Scenes Logo",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="min-h-screen pt-[100px] bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-[#6B21A8] mb-4 tracking-tight">
            Our Partners
          </h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Desktop Version - All Partners Visible */}
        <div className="hidden md:block">
          {/* Titles Row */}
          <div className="px-8 py-8">
            <div className="grid grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl font-bold text-[#6B21A8] leading-tight">
                    {partner.category}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Logos Row */}
          <div className="px-8 py-16">
            <div className="grid grid-cols-4 gap-12 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center group"
                >
                  <div className="relative p-8 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white border border-gray-200">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="w-40 h-40 object-contain mx-auto filter transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Version - Swiper */}
        <div className="md:hidden">
          {/* Current Partner Header */}
          <div className="px-8 py-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#6B21A8] leading-tight">
                {partners[currentSlide].category}
              </h3>
            </div>
          </div>

          {/* Swiper Container */}
          <div className="relative px-8 py-12">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#6B21A8] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#6B21A8] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center items-center"
                  >
                    <div className="relative p-6 rounded-2xl transition-all duration-300 bg-white border border-gray-200 shadow-lg">
                      <img
                        src={partner.logo}
                        alt={partner.alt}
                        className="w-32 h-32 object-contain mx-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#6B21A8]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
    </div>
  );
};

export default PartnersPage;

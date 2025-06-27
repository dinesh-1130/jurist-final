// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FaUsers, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
// import "swiper/css";

// const ruleCards = [
//   {
//     title: "Team Composition",
//     description:
//       "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
//     icon: <FaUsers className="text-xl text-purple-800" />,
//     image: "/assets/social-1.jpg",
//   },
//   {
//     title: "Eligibility",
//     description:
//       "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
//     icon: <FaUserGraduate className="text-xl text-purple-800" />,
//     image: "/assets/social-2.jpg",
//   },
//   {
//     title: "Competition Format",
//     description:
//       "The competition begins with virtual preliminaries and quarter-finals, progressing to on-site semi-finals and a grand finale - testing legal reasoning, adaptability, and courtroom presence through complex corporate law issues, mirroring real-world legal practice.",
//     icon: <FaProjectDiagram className="text-xl text-purple-800" />,
//     image: "/assets/social-3.jpg",
//   },
//   {
//     title: "Team Composition",
//     description:
//       "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
//     icon: <FaUsers className="text-xl text-purple-800" />,
//     image: "/assets/pic-1.jpg",
//   },
//   {
//     title: "Eligibility",
//     description:
//       "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
//     icon: <FaUserGraduate className="text-xl text-purple-800" />,
//     image: "/assets/pic-2.jpg",
//   },
//   {
//     title: "Competition Format",
//     description:
//       "Starts online with prelims and quarters, then transitions onsite for semifinals and finale to test performance under varied environments.",
//     icon: <FaProjectDiagram className="text-xl text-purple-800" />,
//     image: "/assets/pic-3.jpg",
//   },
// ];

// const RulesSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="relative bg-white py-20 px-4 font-['Lato']">
//       <div className="text-sm font-semibold mb-2 text-purple-800">
//         Rules & Guidelines
//       </div>
//       <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
//         Registrations Open for JuristQuest 2025
//         <br /> Calling All South Indian Law Colleges!
//       </h2>

//       <Swiper
//         spaceBetween={24}
//         breakpoints={{
//           320: { slidesPerView: 1.2 },
//           640: { slidesPerView: 1.5 },
//           768: { slidesPerView: 2.2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="rule-swiper"
//       >
//         {ruleCards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div
//               data-aos="fade-up"
//               className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="bg-white p-2 rounded-full">{card.icon}</div>
//                   <h3 className="font-semibold text-lg">{card.title}</h3>
//                 </div>
//                 <p className="text-sm mb-4">{card.description}</p>
//                 <a
//               href="/contact-form"
//                   className="text-sm font-medium underline transition"
//                   style={{ color: "#9F7AEA" }}
//                   onMouseOver={(e) => (e.target.style.color = "#6B21A8")}
//                   onMouseOut={(e) => (e.target.style.color = "#9F7AEA")}
//                 >
//                   Register now
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default RulesSection;
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaUsers,
  FaUserGraduate,
  FaProjectDiagram,
  FaEye,
  FaDownload,
} from "react-icons/fa";
import "swiper/css";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import flipSound from "/assets/flip.mp3";
import pdfFile from "/assets/Jurist.pdf";

// Set worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ruleCards = [
  {
    title: "Team Composition",
    description:
      "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
    icon: <FaUsers className="text-xl text-purple-800" />,
    image: "/assets/social-1.jpg",
  },
  {
    title: "Eligibility",
    description:
      "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
    icon: <FaUserGraduate className="text-xl text-purple-800" />,
    image: "/assets/social-2.jpg",
  },
  {
    title: "Competition Format",
    description:
      "The competition begins with virtual preliminaries and quarter-finals, progressing to on-site semi-finals and a grand finale - testing legal reasoning, adaptability, and courtroom presence through complex corporate law issues, mirroring real-world legal practice.",
    icon: <FaProjectDiagram className="text-xl text-purple-800" />,
    image: "/assets/social-3.jpg",
  },
  {
    title: "Team Composition",
    description:
      "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
    icon: <FaUsers className="text-xl text-purple-800" />,
    image: "/assets/pic-1.jpg",
  },
  {
    title: "Eligibility",
    description:
      "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
    icon: <FaUserGraduate className="text-xl text-purple-800" />,
    image: "/assets/pic-2.jpg",
  },
  {
    title: "Competition Format",
    description:
      "Starts online with prelims and quarters, then transitions onsite for semifinals and finale to test performance under varied environments.",
    icon: <FaProjectDiagram className="text-xl text-purple-800" />,
    image: "/assets/pic-3.jpg",
  },
];

const RulesSection = () => {
  const [showFlipbook, setShowFlipbook] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Jurist.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-white py-20 px-4 font-['Lato']">
      {/* Top right corner buttons */}
      <div className="absolute top-6 right-6 z-10 flex gap-4">
        <button
          onClick={() => setShowFlipbook(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
        >
          <FaEye className="w-4 h-4" />
          View Brochure
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
        >
          <FaDownload className="w-4 h-4" />
          Download Brochure
        </button>
      </div>

      <div className="text-sm font-semibold mb-2 text-purple-800">
        Rules & Guidelines
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
        Registrations Open for JuristQuest 2025
        <br /> Calling All South Indian Law Colleges!
      </h2>

      <Swiper
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="rule-swiper"
      >
        {ruleCards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="fade-up"
              className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white p-2 rounded-full">{card.icon}</div>
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                </div>
                <p className="text-sm mb-4">{card.description}</p>
                <a
                  href="/contact-form"
                  className="text-sm font-medium underline transition"
                  style={{ color: "#9F7AEA" }}
                  onMouseOver={(e) => (e.target.style.color = "#6B21A8")}
                  onMouseOut={(e) => (e.target.style.color = "#9F7AEA")}
                >
                  Register now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Mobile-only buttons below Swiper */}
      <div className="sm:hidden mt-10 flex flex-col items-center gap-4">
        <button
          onClick={() => setShowFlipbook(true)}
          className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
        >
          <FaEye className="w-4 h-4" />
          View Brochure
        </button>
        <button
          onClick={handleDownload}
          className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
        >
          <FaDownload className="w-4 h-4" />
          Download Brochure
        </button>
      </div>

      {showFlipbook && <PDFFlipbook onClose={() => setShowFlipbook(false)} />}
    </section>
  );
};

export default RulesSection;

const Pages = React.forwardRef((props, ref) => (
  <div ref={ref} className="demoPage">
    <div>{props.children}</div>
  </div>
));
Pages.displayName = "Pages";

function PDFFlipbook({ onClose }) {
  const [numPages, setNumPages] = useState(0);
  const [flipBookKey, setFlipBookKey] = useState(Date.now());
  const isMobile = window.innerWidth < 768;
  const audioRef = useRef(null);
  const [showUsageTip, setShowUsageTip] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(flipSound);
    audioRef.current.preload = "auto";

    const timer = setTimeout(() => setShowUsageTip(false), 5000);
    return () => {
      if (audioRef.current) audioRef.current.pause();
      clearTimeout(timer);
    };
  }, []);

  const playFlipSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setFlipBookKey(Date.now());
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-start">
        <div className="absolute top-4 right-4 flex gap-2 z-50">
          {showUsageTip && (
            <div className="bg-white text-black p-3 rounded-lg shadow-lg mr-2 max-w-xs">
              <p className="font-medium">How to use:</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Click and drag corners to flip pages</li>
                <li>Use mouse wheel to zoom in/out</li>
                <li>Click arrows on sides to navigate</li>
              </ul>
            </div>
          )}
          <button
            onClick={onClose}
            className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>

        <div className="w-screen h-screen flex justify-center items-center">
          {numPages > 0 && (
            <div className="w-full pl-8 flex items-center justify-center overflow-hidden">
              <HTMLFlipBook
                key={flipBookKey}
                width={isMobile ? 300 : 550}
                height={isMobile ? 300 : 700}
                size="stretch"
                minWidth={315}
                maxWidth={550}
                minHeight={500}
                maxHeight={1100}
                showCover={true}
                drawShadow={false}
                mobileScrollSupport={false}
                startPage={0}
                usePortrait={isMobile}
                flippingTime={1000}
                maxShadowOpacity={0.5}
                className="flipbook-container"
                style={{ backgroundColor: "transparent" }}
                onFlip={playFlipSound}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <Pages key={index}>
                    <Document file={pdfFile}>
                      <Page
                        pageNumber={index + 1}
                        width={isMobile ? 330 : 550}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                      />
                    </Document>
                  </Pages>
                ))}
              </HTMLFlipBook>
            </div>
          )}
        </div>

        <div style={{ display: "none" }}>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} width={100} />
          </Document>
        </div>
      </div>
    </div>
  );
}

// // import React, { useEffect, useState, useRef } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import {
// //   FaUsers,
// //   FaUserGraduate,
// //   FaProjectDiagram,
// //   FaEye,
// //   FaDownload,
// // } from "react-icons/fa";
// // import "swiper/css";
// // import HTMLFlipBook from "react-pageflip";
// // import { Document, Page, pdfjs } from "react-pdf";
// // import flipSound from "/assets/flip.mp3";
// // import pdfFile from "/assets/Jurist.pdf";

// // // Set worker for react-pdf
// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// // const ruleCards = [
// //   {
// //     title: "Team Composition",
// //     description:
// //       "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
// //     icon: <FaUsers className="text-xl text-purple-800" />,
// //     image: "/assets/social-1.jpg",
// //   },
// //   {
// //     title: "Eligibility",
// //     description:
// //       "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
// //     icon: <FaUserGraduate className="text-xl text-purple-800" />,
// //     image: "/assets/social-2.jpg",
// //   },
// //   {
// //     title: "Competition Format",
// //     description:
// //       "The competition begins with virtual preliminaries and quarter-finals, progressing to on-site semi-finals and a grand finale - testing legal reasoning, adaptability, and courtroom presence through complex corporate law issues, mirroring real-world legal practice.",
// //     icon: <FaProjectDiagram className="text-xl text-purple-800" />,
// //     image: "/assets/social-3.jpg",
// //   },
// //   {
// //     title: "Team Composition",
// //     description:
// //       "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
// //     icon: <FaUsers className="text-xl text-purple-800" />,
// //     image: "/assets/pic-1.jpg",
// //   },
// //   {
// //     title: "Eligibility",
// //     description:
// //       "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
// //     icon: <FaUserGraduate className="text-xl text-purple-800" />,
// //     image: "/assets/pic-2.jpg",
// //   },
// //   {
// //     title: "Competition Format",
// //     description:
// //       "Starts online with prelims and quarters, then transitions onsite for semifinals and finale to test performance under varied environments.",
// //     icon: <FaProjectDiagram className="text-xl text-purple-800" />,
// //     image: "/assets/pic-3.jpg",
// //   },
// // ];

// // const RulesSection = () => {
// //   const [showFlipbook, setShowFlipbook] = useState(false);

// //   useEffect(() => {
// //     AOS.init({ duration: 800, once: true });
// //   }, []);

// //   const handleDownload = () => {
// //     const link = document.createElement("a");
// //     link.href = pdfFile;
// //     link.download = "Jurist.pdf";
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   return (
// //     <section className="relative bg-white py-20 px-4 font-['Lato']">
// //       {/* Top right corner buttons */}
// //       <div className="hidden sm:flex absolute top-28 right-6 z-10 gap-4">
// //         <button
// //           onClick={() => setShowFlipbook(true)}
// //           className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
// //         >
// //           <FaEye className="w-4 h-4" />
// //           View Brochure
// //         </button>
// //         <button
// //           onClick={handleDownload}
// //           className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
// //         >
// //           <FaDownload className="w-4 h-4" />
// //           Download Brochure
// //         </button>
// //       </div>

// //       <div className="text-sm font-semibold mb-2 text-purple-800">
// //         Rules & Guidelines
// //       </div>
// //       <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
// //         Registrations Open for JuristQuest 2025
// //         <br /> Calling All South Indian Law Colleges!
// //       </h2>

// //       <Swiper
// //         spaceBetween={24}
// //         breakpoints={{
// //           320: { slidesPerView: 1.2 },
// //           640: { slidesPerView: 1.5 },
// //           768: { slidesPerView: 2.2 },
// //           1024: { slidesPerView: 3 },
// //         }}
// //         className="rule-swiper"
// //       >
// //         {ruleCards.map((card, index) => (
// //           <SwiperSlide key={index}>
// //             <div
// //               data-aos="fade-up"
// //               className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
// //             >
// //               <img
// //                 src={card.image}
// //                 alt={card.title}
// //                 className="absolute inset-0 w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
// //                 <div className="flex items-center gap-2 mb-2">
// //                   <div className="bg-white p-2 rounded-full">{card.icon}</div>
// //                   <h3 className="font-semibold text-lg">{card.title}</h3>
// //                 </div>
// //                 <p className="text-sm mb-4">{card.description}</p>
// //                 <a
// //                   href="/contact-form"
// //                   className="text-sm font-medium underline transition"
// //                   style={{ color: "#9F7AEA" }}
// //                   onMouseOver={(e) => (e.target.style.color = "#6B21A8")}
// //                   onMouseOut={(e) => (e.target.style.color = "#9F7AEA")}
// //                 >
// //                   Register now
// //                 </a>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //       {/* Mobile-only buttons below Swiper */}
// //       <div className="sm:hidden mt-10 flex flex-col items-center gap-4">
// //         <button
// //           onClick={() => setShowFlipbook(true)}
// //           className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
// //         >
// //           <FaEye className="w-4 h-4" />
// //           View Brochure
// //         </button>
// //         <button
// //           onClick={handleDownload}
// //           className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
// //         >
// //           <FaDownload className="w-4 h-4" />
// //           Download Brochure
// //         </button>
// //       </div>

// //       {showFlipbook && <PDFFlipbook onClose={() => setShowFlipbook(false)} />}
// //     </section>
// //   );
// // };

// // export default RulesSection;

// // const Pages = React.forwardRef((props, ref) => (
// //   <div ref={ref} className="demoPage">
// //     <div>{props.children}</div>
// //   </div>
// // ));
// // Pages.displayName = "Pages";

// // function PDFFlipbook({ onClose }) {
// //   const [numPages, setNumPages] = useState(0);
// //   const [flipBookKey, setFlipBookKey] = useState(Date.now());
// //   const isMobile = window.innerWidth < 768;
// //   const audioRef = useRef(null);
// //   const [showUsageTip, setShowUsageTip] = useState(true);

// //   useEffect(() => {
// //     audioRef.current = new Audio(flipSound);
// //     audioRef.current.preload = "auto";

// //     const timer = setTimeout(() => setShowUsageTip(false), 5000);
// //     return () => {
// //       if (audioRef.current) audioRef.current.pause();
// //       clearTimeout(timer);
// //     };
// //   }, []);

// //   const playFlipSound = () => {
// //     if (audioRef.current) {
// //       audioRef.current.currentTime = 0;
// //       audioRef.current.play().catch(() => {});
// //     }
// //   };

// //   function onDocumentLoadSuccess({ numPages }) {
// //     setNumPages(numPages);
// //     setFlipBookKey(Date.now());
// //   }

// //   return (
// //     <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-hidden">
// //       <div className="relative w-full h-full flex flex-col items-center justify-start">
// //         <div className="absolute top-4 right-4 flex gap-2 z-50">
// //           {showUsageTip && (
// //             <div className="bg-white text-black p-3 rounded-lg shadow-lg mr-2 max-w-xs">
// //               <p className="font-medium">How to use:</p>
// //               <ul className="list-disc pl-5 text-sm">
// //                 <li>Click and drag corners to flip pages</li>
// //                 <li>Use mouse wheel to zoom in/out</li>
// //                 <li>Click arrows on sides to navigate</li>
// //               </ul>
// //             </div>
// //           )}
// //           <button
// //             onClick={onClose}
// //             className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
// //           >
// //             Close
// //           </button>
// //         </div>

// //         <div className="w-screen h-screen flex justify-center items-center">
// //           {numPages > 0 && (
// //             <div className="w-full pl-8 flex items-center justify-center overflow-hidden">
// //               <HTMLFlipBook
// //                 key={flipBookKey}
// //                 width={isMobile ? 300 : 550}
// //                 height={isMobile ? 300 : 700}
// //                 size="stretch"
// //                 minWidth={315}
// //                 maxWidth={550}
// //                 minHeight={500}
// //                 maxHeight={1100}
// //                 showCover={true}
// //                 drawShadow={false}
// //                 mobileScrollSupport={false}
// //                 startPage={0}
// //                 usePortrait={isMobile}
// //                 flippingTime={1000}
// //                 maxShadowOpacity={0.5}
// //                 className="flipbook-container"
// //                 style={{ backgroundColor: "transparent" }}
// //                 onFlip={playFlipSound}
// //               >
// //                 {Array.from(new Array(numPages), (_, index) => (
// //                   <Pages key={index}>
// //                     <Document file={pdfFile}>
// //                       <Page
// //                         pageNumber={index + 1}
// //                         width={isMobile ? 330 : 550}
// //                         renderAnnotationLayer={false}
// //                         renderTextLayer={false}
// //                       />
// //                     </Document>
// //                   </Pages>
// //                 ))}
// //               </HTMLFlipBook>
// //             </div>
// //           )}
// //         </div>

// //         <div style={{ display: "none" }}>
// //           <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
// //             <Page pageNumber={1} width={100} />
// //           </Document>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   FaUsers,
//   FaUserGraduate,
//   FaProjectDiagram,
//   FaEye,
//   FaDownload,
//   FaGavel,
//   FaTimes,
// } from "react-icons/fa";
// import "swiper/css";
// import HTMLFlipBook from "react-pageflip";
// import { Document, Page, pdfjs } from "react-pdf";
// import flipSound from "/assets/flip.mp3";
// import pdfFile from "/assets/Jurist.pdf";

// // Set worker for react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
//   const [showFlipbook, setShowFlipbook] = useState(false);
//   const [showMootProblems, setShowMootProblems] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdfFile;
//     link.download = "Jurist.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="relative bg-white py-20 px-4 font-['Lato']">
//       {/* Top right corner buttons */}
//       <div className="hidden sm:flex absolute top-28 right-6 z-10 gap-4">
//         <button
//           onClick={() => setShowFlipbook(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
//         >
//           <FaEye className="w-4 h-4" />
//           View Brochure
//         </button>
//         <button
//           onClick={handleDownload}
//           className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
//         >
//           <FaDownload className="w-4 h-4" />
//           Download Brochure
//         </button>
//         <button
//           onClick={() => setShowMootProblems(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
//         >
//           <FaGavel className="w-4 h-4" />
//           Moot Problems
//         </button>
//       </div>

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
//                   href="/contact-form"
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

//       {/* Mobile-only buttons below Swiper */}
//       <div className="sm:hidden mt-10 flex flex-col items-center gap-4">
//         <button
//           onClick={() => setShowFlipbook(true)}
//           className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
//         >
//           <FaEye className="w-4 h-4" />
//           View Brochure
//         </button>
//         <button
//           onClick={handleDownload}
//           className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
//         >
//           <FaDownload className="w-4 h-4" />
//           Download Brochure
//         </button>
//         <button
//           onClick={() => setShowMootProblems(true)}
//           className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
//         >
//           <FaGavel className="w-4 h-4" />
//           Moot Problems
//         </button>
//       </div>

//       {showFlipbook && <PDFFlipbook onClose={() => setShowFlipbook(false)} />}
//       {showMootProblems && (
//         <MootProblemsPopup onClose={() => setShowMootProblems(false)} />
//       )}
//     </section>
//   );
// };

// // Moot Problems Popup Component
// const MootProblemsPopup = ({ onClose }) => {
//   const handleViewPDF = (problemType) => {
//     // You can customize these PDF paths based on your actual file structure
//     const pdfPath =
//       problemType === 1
//         ? "/assets/MootProblem1.pdf"
//         : "/assets/MootProblem2.pdf";
//     window.open(pdfPath, "_blank");
//   };

//   const handleDownloadPDF = (problemType) => {
//     const link = document.createElement("a");
//     const pdfPath =
//       problemType === 1
//         ? "/assets/MootProblem1.pdf"
//         : "/assets/MootProblem2.pdf";
//     const fileName =
//       problemType === 1 ? "MootProblem1.pdf" : "MootProblem2.pdf";

//     link.href = pdfPath;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           <FaTimes className="w-5 h-5" />
//         </button>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <FaGavel className="w-12 h-12 text-purple-800 mx-auto mb-3" />
//           <h2 className="text-2xl font-bold text-gray-800">Moot Problems</h2>
//           <p className="text-gray-600 mt-2">
//             Select the problem set you want to access
//           </p>
//         </div>

//         {/* Problem Cards */}
//         <div className="space-y-4">
//           {/* Moot Problem 1 */}
//           <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//             <h3 className="font-semibold text-lg text-gray-800 mb-2">
//               MOOT PROBLEM - I
//             </h3>
//             <p className="text-gray-600 text-sm mb-4">
//               (For Preliminary Rounds & Quarter-Finals)
//             </p>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleViewPDF(1)}
//                 className="flex items-center gap-2 px-3 py-2 bg-purple-800 text-white rounded text-sm hover:bg-purple-700 transition-colors"
//               >
//                 <FaEye className="w-4 h-4" />
//                 View PDF
//               </button>
//               <button
//                 onClick={() => handleDownloadPDF(1)}
//                 className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors"
//               >
//                 <FaDownload className="w-4 h-4" />
//                 Download PDF
//               </button>
//             </div>
//           </div>

//           {/* Moot Problem 2 */}
//           <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//             <h3 className="font-semibold text-lg text-gray-800 mb-2">
//               MOOT PROBLEM - II
//             </h3>
//             <p className="text-gray-600 text-sm mb-4">(Semi-Finals & Final)</p>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleViewPDF(2)}
//                 className="flex items-center gap-2 px-3 py-2 bg-purple-800 text-white rounded text-sm hover:bg-purple-700 transition-colors"
//               >
//                 <FaEye className="w-4 h-4" />
//                 View PDF
//               </button>
//               <button
//                 onClick={() => handleDownloadPDF(2)}
//                 className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors"
//               >
//                 <FaDownload className="w-4 h-4" />
//                 Download PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RulesSection;

// const Pages = React.forwardRef((props, ref) => (
//   <div ref={ref} className="demoPage">
//     <div>{props.children}</div>
//   </div>
// ));
// Pages.displayName = "Pages";

// function PDFFlipbook({ onClose }) {
//   const [numPages, setNumPages] = useState(0);
//   const [flipBookKey, setFlipBookKey] = useState(Date.now());
//   const isMobile = window.innerWidth < 768;
//   const audioRef = useRef(null);
//   const [showUsageTip, setShowUsageTip] = useState(true);

//   useEffect(() => {
//     audioRef.current = new Audio(flipSound);
//     audioRef.current.preload = "auto";

//     const timer = setTimeout(() => setShowUsageTip(false), 5000);
//     return () => {
//       if (audioRef.current) audioRef.current.pause();
//       clearTimeout(timer);
//     };
//   }, []);

//   const playFlipSound = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = 0;
//       audioRef.current.play().catch(() => {});
//     }
//   };

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setFlipBookKey(Date.now());
//   }

//   return (
//     <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-hidden">
//       <div className="relative w-full h-full flex flex-col items-center justify-start">
//         <div className="absolute top-4 right-4 flex gap-2 z-50">
//           {showUsageTip && (
//             <div className="bg-white text-black p-3 rounded-lg shadow-lg mr-2 max-w-xs">
//               <p className="font-medium">How to use:</p>
//               <ul className="list-disc pl-5 text-sm">
//                 <li>Click and drag corners to flip pages</li>
//                 <li>Use mouse wheel to zoom in/out</li>
//                 <li>Click arrows on sides to navigate</li>
//               </ul>
//             </div>
//           )}
//           <button
//             onClick={onClose}
//             className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//           >
//             Close
//           </button>
//         </div>

//         <div className="w-screen h-screen flex justify-center items-center">
//           {numPages > 0 && (
//             <div className="w-full pl-8 flex items-center justify-center overflow-hidden">
//               <HTMLFlipBook
//                 key={flipBookKey}
//                 width={isMobile ? 300 : 550}
//                 height={isMobile ? 300 : 700}
//                 size="stretch"
//                 minWidth={315}
//                 maxWidth={550}
//                 minHeight={500}
//                 maxHeight={1100}
//                 showCover={true}
//                 drawShadow={false}
//                 mobileScrollSupport={false}
//                 startPage={0}
//                 usePortrait={isMobile}
//                 flippingTime={1000}
//                 maxShadowOpacity={0.5}
//                 className="flipbook-container"
//                 style={{ backgroundColor: "transparent" }}
//                 onFlip={playFlipSound}
//               >
//                 {Array.from(new Array(numPages), (_, index) => (
//                   <Pages key={index}>
//                     <Document file={pdfFile}>
//                       <Page
//                         pageNumber={index + 1}
//                         width={isMobile ? 330 : 550}
//                         renderAnnotationLayer={false}
//                         renderTextLayer={false}
//                       />
//                     </Document>
//                   </Pages>
//                 ))}
//               </HTMLFlipBook>
//             </div>
//           )}
//         </div>

//         <div style={{ display: "none" }}>
//           <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//             <Page pageNumber={1} width={100} />
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }

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
  FaGavel,
  FaTimes,
} from "react-icons/fa";
import "swiper/css";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import flipSound from "/assets/flip.mp3";
import pdfFile from "/assets/new-pdf1.pdf";

// Set worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
  const [showMootProblems, setShowMootProblems] = useState(false);

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
      <div className="hidden sm:flex absolute top-28 right-6 z-10 gap-4">
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
        <button
          onClick={() => setShowMootProblems(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-800"
        >
          <FaGavel className="w-4 h-4" />
          Moot Problems
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
        <button
          onClick={() => setShowMootProblems(true)}
          className="w-3/5 max-w-xs px-4 py-2 bg-purple-800 text-white rounded flex items-center justify-center gap-2"
        >
          <FaGavel className="w-4 h-4" />
          Moot Problems
        </button>
      </div>

      {showFlipbook && <PDFFlipbook onClose={() => setShowFlipbook(false)} />}
      {showMootProblems && (
        <MootProblemsPopup onClose={() => setShowMootProblems(false)} />
      )}
    </section>
  );
};

// Moot Problems Popup Component
const MootProblemsPopup = ({ onClose }) => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handleViewPDF = (problemType) => {
    setSelectedProblem(problemType);
  };

  const handleBackToSelection = () => {
    setSelectedProblem(null);
  };

  if (selectedProblem) {
    return (
      <MootProblemFlipbook
        problemType={selectedProblem}
        onClose={onClose}
        onBack={handleBackToSelection}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-16">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <FaGavel className="w-12 h-12 text-purple-800 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-800">Moot Problems</h2>
          <p className="text-gray-600 mt-2">
            Select the problem set you want to view
          </p>
        </div>

        {/* Problem Cards */}
        <div className="space-y-4">
          {/* Moot Problem 1 */}
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              MOOT PROBLEM - I
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              (For Preliminary Rounds & Quarter-Finals)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleViewPDF(1)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-800 text-white rounded text-sm hover:bg-purple-700 transition-colors"
              >
                <FaEye className="w-4 h-4" />
                View Problem
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/assets/MootProblem1.pdf";
                  link.download = "MootProblem1.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-800 text-white rounded text-sm hover:bg-purple-700 transition-colors"
              >
                <FaDownload className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Moot Problem 2 */}
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              MOOT PROBLEM - II
            </h3>
            <p className="text-gray-600 text-sm mb-4">(Semi-Finals & Final)</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleViewPDF(2)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-800 text-white rounded text-sm hover:bg-purple-700 transition-colors"
              >
                <FaEye className="w-4 h-4" />
                View Problem
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/assets/MootProblem2.pdf";
                  link.download = "MootProblem2.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-800 text-white rounded text-sm hover:bg-purple-700 transition-colors"
              >
                <FaDownload className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Moot Problem Flipbook Component
const MootProblemFlipbook = ({ problemType, onClose, onBack }) => {
  const [numPages, setNumPages] = useState(0);
  const [flipBookKey, setFlipBookKey] = useState(Date.now());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const audioRef = useRef(null);
  const [showUsageTip, setShowUsageTip] = useState(true);

  const pdfFile =
    problemType === 1 ? "/assets/MootProblem1.pdf" : "/assets/MootProblem2.pdf";
  const title = problemType === 1 ? "MOOT PROBLEM - I" : "MOOT PROBLEM - II";
  const subtitle =
    problemType === 1
      ? "(For Preliminary Rounds & Quarter-Finals)"
      : "(Semi-Finals & Final)";

  useEffect(() => {
    audioRef.current = new Audio(flipSound);
    audioRef.current.preload = "auto";

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setShowUsageTip(false), 5000);

    return () => {
      if (audioRef.current) audioRef.current.pause();
      window.removeEventListener("resize", handleResize);
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
        {/* Header with title and controls */}
        <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-start sm:items-center z-50 gap-2">
          <div className="text-white">
            <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
            <p className="text-xs sm:text-sm text-gray-300">{subtitle}</p>
          </div>

          <div className="flex gap-2 items-center flex-wrap">
            {showUsageTip && (
              <div className="hidden md:block bg-white text-black p-3 rounded-lg shadow-lg max-w-xs">
                <p className="font-medium">How to use:</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Click and drag corners to flip pages</li>
                  <li>Use mouse wheel to zoom in/out</li>
                  <li>Click arrows on sides to navigate</li>
                </ul>
              </div>
            )}

            <button
              onClick={onBack}
              className="text-white bg-gray-600 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
            >
              Back
            </button>
            <button
              onClick={onClose}
              className="text-white bg-red-600 hover:bg-red-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>

        {/* Mobile usage tip */}
        {showUsageTip && isMobile && (
          <div className="absolute top-24 left-4 right-4 bg-white text-black p-2 rounded-lg shadow-lg z-50">
            <p className="font-medium text-xs text-center">
              Tap corners to flip • Pinch to zoom • Swipe to navigate
            </p>
          </div>
        )}

        <div
          className="w-screen h-screen flex justify-center items-center"
          style={{
            paddingTop: isMobile ? "60px" : "0px",
            paddingBottom: isMobile ? "20px" : "0px",
          }}
        >
          {numPages > 0 && (
            <div className="w-full h-full flex items-center justify-center overflow-hidden px-2">
              <HTMLFlipBook
                key={flipBookKey}
                width={isMobile ? Math.min(window.innerWidth - 20, 320) : 550}
                height={
                  isMobile ? Math.min(window.innerHeight - 120, 500) : 700
                }
                size="stretch"
                minWidth={315}
                maxWidth={isMobile ? 400 : 550}
                minHeight={500}
                maxHeight={isMobile ? window.innerHeight - 120 : 1100}
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
                        width={
                          isMobile ? Math.min(window.innerWidth - 40, 350) : 550
                        }
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        scale={isMobile ? 1 : 1}
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const audioRef = useRef(null);
  const [showUsageTip, setShowUsageTip] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(flipSound);
    audioRef.current.preload = "auto";

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setShowUsageTip(false), 5000);

    return () => {
      if (audioRef.current) audioRef.current.pause();
      window.removeEventListener("resize", handleResize);
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
          {showUsageTip && !isMobile && (
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

        {/* Mobile usage tip */}
        {showUsageTip && isMobile && (
          <div className="absolute top-16 left-4 right-4 bg-white text-black p-2 rounded-lg shadow-lg z-50">
            <p className="font-medium text-xs">
              Tap corners to flip • Pinch to zoom • Swipe to navigate
            </p>
          </div>
        )}

        <div
          className="w-screen h-screen flex justify-center items-center"
          style={{
            paddingTop: isMobile ? "60px" : "0px",
            paddingBottom: isMobile ? "20px" : "0px",
          }}
        >
          {numPages > 0 && (
            <div className="w-full h-full flex items-center justify-center overflow-hidden px-2">
              <HTMLFlipBook
                key={flipBookKey}
                width={isMobile ? Math.min(window.innerWidth - 20, 320) : 550}
                height={
                  isMobile ? Math.min(window.innerHeight - 120, 500) : 700
                }
                size="stretch"
                minWidth={isMobile ? 300 : 315}
                maxWidth={isMobile ? 400 : 550}
                minHeight={isMobile ? 400 : 500}
                maxHeight={isMobile ? window.innerHeight - 120 : 1100}
                showCover={true}
                drawShadow={false}
                mobileScrollSupport={isMobile}
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
                        width={
                          isMobile ? Math.min(window.innerWidth - 40, 350) : 550
                        }
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        scale={isMobile ? 1 : 1}
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

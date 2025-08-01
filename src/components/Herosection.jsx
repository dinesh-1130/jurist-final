// // // // // import { useEffect, useRef } from "react";
// // // // // import AOS from "aos";
// // // // // import "aos/dist/aos.css";

// // // // // export default function HeroSection() {
// // // // //   const scrollRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     AOS.init({ duration: 800, once: true });
// // // // //   }, []);

// // // // //   const scrollToSection = () => {
// // // // //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
// // // // //         {/* Background Image */}
// // // // //         <img
// // // // //           src="/assets/new-2.png"
// // // // //           loading="lazy"
// // // // //           alt="Hero Background"
// // // // //           className="absolute top-0 left-0 w-full h-full object-cover object-[70%_top] sm:object-[center_top] z-0"
// // // // //         />

// // // // //         {/* Hero Content */}
// // // // //         <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[45vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
// // // // //           <div className="max-w-3xl w-full" data-aos="fade-up">
// // // // //             <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
// // // // //               WELCOME TO <br />
// // // // //               <span className="text-3xl sm:text-3xl md:text-6xl">JURISTQUEST – 2025</span>
// // // // //             </h1>

// // // // //             {/* Line split into 3 on mobile, 1 line on sm+ */}
// // // // //             <p
// // // // //               className="text-sm sm:text-base md:text-lg font-medium text-white mt-2 leading-snug"
// // // // //               data-aos="fade-up"
// // // // //               data-aos-delay="200"
// // // // //             >
// // // // //               <span className="block sm:hidden">
// // // // //                 India’s Most Ambitious <br />
// // // // //                 Moot Court Challenge <br />
// // // // //                 Begins Here…
// // // // //               </span>
// // // // //               <span className="hidden sm:inline">
// // // // //                 India’s Most Ambitious Moot Court Challenge Begins Here…
// // // // //               </span>
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // }
// // // // import { useEffect, useRef } from "react";
// // // // import AOS from "aos";
// // // // import "aos/dist/aos.css";

// // // // export default function HeroSection() {
// // // //   const scrollRef = useRef(null);

// // // //   useEffect(() => {
// // // //     AOS.init({ duration: 800, once: true });
// // // //   }, []);

// // // //   const scrollToSection = () => {
// // // //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
// // // //         {/* Background Image */}
// // // //         <img
// // // //           src="/assets/new-2.png"
// // // //           loading="lazy"
// // // //           alt="Hero Background"
// // // //           className="absolute top-0 left-0 w-full h-full object-cover object-[60%_top] sm:object-[center_top] z-0"
// // // //         />

// // // //         {/* Hero Content */}
// // // //         <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[30vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
// // // //           <div className="max-w-3xl w-full" data-aos="fade-up">
// // // //             <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
// // // //               WELCOME TO <br />
// // // //               <span className="text-3xl sm:text-3xl md:text-6xl">
// // // //                 JURISTQUEST 2025
// // // //               </span>
// // // //             </h1>

// // // //             <p
// // // //               className="text-sm sm:text-base md:text-lg font-medium text-white mt-2 leading-snug"
// // // //               data-aos="fade-up"
// // // //               data-aos-delay="200"
// // // //             >
// // // //               <span className="block sm:hidden">
// // // //                 India’s First-Ever <br />
// // // //                 Prestigious Moot Court <br />
// // // //                 Marathon
// // // //               </span>
// // // //               <span className="hidden sm:inline">
// // // //                 India’s First-Ever Prestigious Moot Court Marathon
// // // //               </span>
// // // //             </p>

// // // //             <p
// // // //               className="text-xs sm:text-sm md:text-base font-medium text-white mt-4 leading-snug"
// // // //               data-aos="fade-up"
// // // //               data-aos-delay="300"
// // // //             >
// // // //               Conceptualized by Crosby Law Associates in association with
// // // //               <br className="hidden sm:block" />
// // // //               (Mr. Krishna Kumar, Secretary of Madras High Court Advocates
// // // //               Association)
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // }
// // // import { useEffect, useRef, useState } from "react";
// // // import { X, Phone, Gift, Users, Target } from "lucide-react";

// // // export default function HeroSection() {
// // //   const scrollRef = useRef(null);
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [imageLoaded, setImageLoaded] = useState(false);

// // //   useEffect(() => {
// // //     // Show popup after a short delay when component mounts
// // //     const timer = setTimeout(() => {
// // //       setShowPopup(true);
// // //     }, 800);

// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Preload the background image
// // //     const img = new Image();
// // //     img.onload = () => setImageLoaded(true);
// // //     img.src = "/assets/new-2.png";
// // //   }, []);

// // //   const scrollToSection = () => {
// // //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   };

// // //   const closePopup = () => {
// // //     setShowPopup(false);
// // //   };

// // //   return (
// // //     <>
// // //       <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
// // //         {/* Background Image with optimized loading */}
// // //         <img
// // //           src="/assets/new-2.png"
// // //           loading="eager"
// // //           alt="Hero Background"
// // //           className={`absolute top-0 left-0 w-full h-full object-cover object-[60%_top] sm:object-[center_top] z-0 transition-opacity duration-700 ${
// // //             imageLoaded ? "opacity-100" : "opacity-0"
// // //           }`}
// // //           onLoad={() => setImageLoaded(true)}
// // //         />

// // //         {/* Hero Content - Keep original design exactly */}
// // //         <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[30vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
// // //           <div className="max-w-3xl w-full" data-aos="fade-up">
// // //             <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
// // //               WELCOME TO <br />
// // //               <span className="text-3xl sm:text-3xl md:text-6xl">
// // //                 JURISTQUEST 2025
// // //               </span>
// // //             </h1>

// // //             <p
// // //               className="text-sm sm:text-base md:text-lg font-medium text-white mt-2 leading-snug"
// // //               data-aos="fade-up"
// // //               data-aos-delay="200"
// // //             >
// // //               <span className="block sm:hidden">
// // //                 India's First-Ever <br />
// // //                 Prestigious Moot Court <br />
// // //                 Marathon
// // //               </span>
// // //               <span className="hidden sm:inline">
// // //                 India's First-Ever Prestigious Moot Court Marathon
// // //               </span>
// // //             </p>

// // //             <p
// // //               className="text-xs sm:text-sm md:text-base font-medium text-white mt-4 leading-snug"
// // //               data-aos="fade-up"
// // //               data-aos-delay="300"
// // //             >
// // //               Conceptualized by Crosby Law Associates in association with
// // //               <br className="hidden sm:block" />
// // //               (Mr. Krishna Kumar, Secretary of Madras High Court Advocates
// // //               Association)
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Clean Popup Modal */}
// // //       {showPopup && (
// // //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
// // //           <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform animate-popup">
// // //             {/* Close Button */}
// // //             <button
// // //               onClick={closePopup}
// // //               className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
// // //             >
// // //               <X size={16} />
// // //             </button>

// // //             {/* Header */}
// // //             <div className="p-6 pb-4 text-center">
// // //               <div
// // //                 className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
// // //                 style={{ backgroundColor: "#6B21A8" }}
// // //               >
// // //                 <span className="text-xl">⚖️</span>
// // //               </div>
// // //               <h2 className="text-xl font-bold text-gray-800 mb-2">
// // //                 JuristQuest 2025
// // //               </h2>
// // //               <p className="font-semibold text-sm" style={{ color: "#6B21A8" }}>
// // //                 JuristQuest Moot Problem is now live on our website! 🚀
// // //               </p>
// // //             </div>

// // //             {/* Content */}
// // //             <div className="px-6 pb-2">
// // //               <div className="text-center mb-4">
// // //                 <p className="text-gray-700 font-medium">
// // //                   Dear{" "}
// // //                   <span className="font-bold" style={{ color: "#6B21A8" }}>
// // //                     Budding Lawyers
// // //                   </span>
// // //                   ,
// // //                 </p>
// // //                 <p className="text-sm text-gray-600 mt-1">
// // //                   Don't miss out — complete your registrations soon to unlock
// // //                   exclusive opportunities!
// // //                 </p>
// // //               </div>

// // //               {/* Features */}
// // //               <div className="space-y-3 mb-4">
// // //                 <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// // //                   <Target
// // //                     className="mt-0.5 flex-shrink-0"
// // //                     style={{ color: "#6B21A8" }}
// // //                     size={16}
// // //                   />
// // //                   <div>
// // //                     <p className="font-semibold text-gray-800 text-sm">
// // //                       🎯 Special Offer:
// // //                     </p>
// // //                     <p className="text-xs text-gray-600">
// // //                       Enjoy discounted registration fees for bulk entries from
// // //                       the same college/institution!
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// // //                   <Users
// // //                     className="mt-0.5 flex-shrink-0"
// // //                     style={{ color: "#6B21A8" }}
// // //                     size={16}
// // //                   />
// // //                   <div>
// // //                     <p className="font-semibold text-gray-800 text-sm">
// // //                       🧑‍💼 Corporate Virtual Internship Program:
// // //                     </p>
// // //                     <p className="text-xs text-gray-600">
// // //                       Limited seats — first-come, first-serve!
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// // //                   <Gift
// // //                     className="mt-0.5 flex-shrink-0"
// // //                     style={{ color: "#6B21A8" }}
// // //                     size={16}
// // //                   />
// // //                   <div>
// // //                     <p className="font-semibold text-gray-800 text-sm">
// // //                       🎁 Surprise Giveaway!
// // //                     </p>
// // //                     <p className="text-xs text-gray-600">
// // //                       Tag{" "}
// // //                       <span className="font-bold" style={{ color: "#6B21A8" }}>
// // //                         #Juristquest.com
// // //                       </span>{" "}
// // //                       in your team registration video on social media and stand
// // //                       a chance to win a gift voucher!
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Contact */}
// // //               <div
// // //                 className="p-3 rounded-lg text-center mb-4"
// // //                 style={{ backgroundColor: "#6B21A8" }}
// // //               >
// // //                 <div className="flex items-center justify-center space-x-1 mb-1">
// // //                   <Phone size={14} style={{ color: "#6B21A8" }} />
// // //                   <span className="font-semibold text-white text-sm">
// // //                     To know more 📞 Reach us at
// // //                   </span>
// // //                 </div>
// // //                 <a
// // //                   href="tel:+919677873855"
// // //                   className="font-bold hover:opacity-80 transition-colors"
// // //                   style={{ color: "#FFFFFF" }}
// // //                 >
// // //                   +91-9677873855
// // //                 </a>
// // //               </div>

// // //               {/* Action Buttons */}
// // //               <div className="flex space-x-2 mb-4">
// // //                 <a
// // //                   href="/contact-form"
// // //                   onClick={closePopup}
// // //                   className="flex-1 py-2.5 px-4 text-white font-semibold rounded-lg hover:opacity-90 transition-colors text-sm text-center"
// // //                   style={{ backgroundColor: "#6B21A8" }}
// // //                 >
// // //                   Register Now
// // //                 </a>
// // //                 <button
// // //                   onClick={closePopup}
// // //                   className="py-2.5 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
// // //                 >
// // //                   Later
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <style jsx>{`
// // //         @keyframes popup {
// // //           from {
// // //             opacity: 0;
// // //             transform: scale(0.9) translateY(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: scale(1) translateY(0);
// // //           }
// // //         }

// // //         .animate-popup {
// // //           animation: popup 0.3s ease-out;
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }
// // import { useEffect, useRef, useState } from "react";
// // import { X, Phone, Gift, Users, Target, Trophy, Award } from "lucide-react";

// // export default function HeroSection() {
// //   const scrollRef = useRef(null);
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [imageLoaded, setImageLoaded] = useState(false);

// //   useEffect(() => {
// //     // Show popup after a short delay when component mounts
// //     const timer = setTimeout(() => {
// //       setShowPopup(true);
// //     }, 800);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   useEffect(() => {
// //     // Preload the background image
// //     const img = new Image();
// //     img.onload = () => setImageLoaded(true);
// //     img.src = "/assets/new-2.png";
// //   }, []);

// //   const scrollToSection = () => {
// //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const closePopup = () => {
// //     setShowPopup(false);
// //   };

// //   return (
// //     <>
// //       <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
// //         {/* Background Image with optimized loading */}
// //         <img
// //           src="/assets/new-2.png"
// //           loading="eager"
// //           alt="Hero Background"
// //           className={`absolute top-0 left-0 w-full h-full object-cover object-[60%_top] sm:object-[center_top] z-0 transition-opacity duration-700 ${
// //             imageLoaded ? "opacity-100" : "opacity-0"
// //           }`}
// //           onLoad={() => setImageLoaded(true)}
// //         />

// //         {/* Hero Content - Keep original design exactly */}
// //         <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[30vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
// //           <div className="max-w-3xl w-full" data-aos="fade-up">
// //             <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
// //               WELCOME TO <br />
// //               <span className="text-3xl sm:text-3xl md:text-6xl">
// //                 JURISTQUEST 2025
// //               </span>
// //             </h1>

// //             <p
// //               className="text-sm sm:text-base md:text-lg font-medium text-white mt-2 leading-snug"
// //               data-aos="fade-up"
// //               data-aos-delay="200"
// //             >
// //               <span className="block sm:hidden">
// //                 India's First-Ever <br />
// //                 Prestigious Moot Court <br />
// //                 Marathon
// //               </span>
// //               <span className="hidden sm:inline">
// //                 India's First-Ever Prestigious Moot Court Marathon
// //               </span>
// //             </p>

// //             <p
// //               className="text-xs sm:text-sm md:text-base font-medium text-white mt-4 leading-snug"
// //               data-aos="fade-up"
// //               data-aos-delay="300"
// //             >
// //               Conceptualized by Crosby Law Associates in association with
// //               <br className="hidden sm:block" />
// //               (Mr. Krishna Kumar, Secretary of Madras High Court Advocates
// //               Association)
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Clean Popup Modal */}
// //       {showPopup && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
// //           <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden transform animate-popup max-h-[90vh] overflow-y-auto">
// //             {/* Close Button */}
// //             <button
// //               onClick={closePopup}
// //               className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
// //             >
// //               <X size={16} />
// //             </button>

// //             {/* Header */}
// //             <div className="p-6 pb-4 text-center">
// //               <div
// //                 className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
// //                 style={{ backgroundColor: "#6B21A8" }}
// //               >
// //                 <span className="text-xl">⚖️</span>
// //               </div>
// //               <h2 className="text-lg font-bold text-gray-800 mb-2">
// //                 ⚖️ DEAR BUDDING LAWYERS, THE WAIT IS OVER!
// //               </h2>
// //               <p className="font-semibold text-sm" style={{ color: "#6B21A8" }}>
// //                 🚀 The JuristQuest Moot Problem is Now Live!
// //               </p>
// //             </div>

// //             {/* Content */}
// //             <div className="px-6 pb-2">
// //               <div className="text-center mb-4">
// //                 <p
// //                   className="text-gray-700 font-bold text-sm mb-2"
// //                   style={{ color: "#6B21A8" }}
// //                 >
// //                   🎓 Be part of India's Most Prestigious Moot Court Marathon —
// //                 </p>
// //                 <p className="text-sm text-gray-600 mb-3">
// //                   A one-of-a-kind opportunity to debate, defend, and make
// //                   history!
// //                 </p>
// //                 <p className="text-gray-800 font-bold text-sm mb-3">
// //                   🏆 AIM HIGH: ATTEMPT TO BREAK THE INDIA BOOK OF RECORDS!
// //                 </p>
// //                 <p className="text-sm text-gray-600 mb-3">
// //                   Register your team and compete to be part of a historic
// //                   record-setting moot.
// //                 </p>
// //                 <p className="text-sm text-gray-600 mb-4">
// //                   ✔️ Record-holder certificates for participants of the winning
// //                   and qualifying teams.
// //                 </p>
// //               </div>

// //               {/* Why You Shouldn't Miss This Section */}
// //               <div className="mb-4">
// //                 <h3 className="font-bold text-gray-800 text-sm mb-3">
// //                   🔔 WHY YOU SHOULDN'T MISS THIS:
// //                 </h3>

// //                 <div className="space-y-3">
// //                   <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// //                     <Target
// //                       className="mt-0.5 flex-shrink-0"
// //                       style={{ color: "#6B21A8" }}
// //                       size={16}
// //                     />
// //                     <div>
// //                       <p className="font-semibold text-gray-800 text-sm">
// //                         🎯 Special Offer:
// //                       </p>
// //                       <p className="text-xs text-gray-600">
// //                         Get discounted fees for group entries from the same
// //                         college/institution! To know more 📞 Reach us at
// //                         +91-9677873855.
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// //                     <Users
// //                       className="mt-0.5 flex-shrink-0"
// //                       style={{ color: "#6B21A8" }}
// //                       size={16}
// //                     />
// //                     <div>
// //                       <p className="font-semibold text-gray-800 text-sm">
// //                         🧑‍💼 Corporate Virtual Internship Program:
// //                       </p>
// //                       <p className="text-xs text-gray-600">
// //                         Limited seats — first-come, first-serve!
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// //                     <Gift
// //                       className="mt-0.5 flex-shrink-0"
// //                       style={{ color: "#6B21A8" }}
// //                       size={16}
// //                     />
// //                     <div>
// //                       <p className="font-semibold text-gray-800 text-sm">
// //                         🎁 Surprise Giveaway!
// //                       </p>
// //                       <p className="text-xs text-gray-600">
// //                         Tag{" "}
// //                         <span
// //                           className="font-bold"
// //                           style={{ color: "#6B21A8" }}
// //                         >
// //                           #Juristquest.com
// //                         </span>{" "}
// //                         in your team registration video on social media and
// //                         stand a chance to win a gift voucher!
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
// //                     <Award
// //                       className="mt-0.5 flex-shrink-0"
// //                       style={{ color: "#6B21A8" }}
// //                       size={16}
// //                     />
// //                     <div>
// //                       <p className="font-semibold text-gray-800 text-sm">
// //                         🏅 Become a record-holder:
// //                       </p>
// //                       <p className="text-xs text-gray-600">
// //                         Participate in JuristQuest 2025 and stand tall with an
// //                         India Book of Records certificate in your name.
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Contact */}
// //               <div
// //                 className="p-3 rounded-lg text-center mb-4"
// //                 style={{ backgroundColor: "#6B21A8" }}
// //               >
// //                 <div className="flex items-center justify-center space-x-1 mb-1">
// //                   <Phone size={14} style={{ color: "#FFFFFF" }} />
// //                   <span className="font-semibold text-white text-sm">
// //                     For more information 📞 Call us at
// //                   </span>
// //                 </div>
// //                 <a
// //                   href="tel:+919677873855"
// //                   className="font-bold hover:opacity-80 transition-colors"
// //                   style={{ color: "#FFFFFF" }}
// //                 >
// //                   +91-9677873855
// //                 </a>
// //               </div>

// //               {/* Action Buttons */}
// //               <div className="flex space-x-2 mb-4">
// //                 <a
// //                   href="/contact-form"
// //                   onClick={closePopup}
// //                   className="flex-1 py-2.5 px-4 text-white font-semibold rounded-lg hover:opacity-90 transition-colors text-sm text-center"
// //                   style={{ backgroundColor: "#6B21A8" }}
// //                 >
// //                   Register Now
// //                 </a>
// //                 <button
// //                   onClick={closePopup}
// //                   className="py-2.5 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
// //                 >
// //                   Later
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <style jsx>{`
// //         @keyframes popup {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.9) translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1) translateY(0);
// //           }
// //         }

// //         .animate-popup {
// //           animation: popup 0.3s ease-out;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }
// import { useEffect, useRef, useState } from "react";
// import { X, Phone, Gift, Users, Target, Trophy, Award } from "lucide-react";

// export default function HeroSection() {
//   const scrollRef = useRef(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     // Show popup after a short delay when component mounts
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 900);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     // Set image as loaded immediately to avoid delay
//     setImageLoaded(true);
//   }, []);

//   const scrollToSection = () => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
//         {/* Background Image with optimized loading */}
//         <img
//           src="/assets/new-2.png"
//           loading="eager"
//           alt="Hero Background"
//           className="absolute top-0 left-0 w-full h-full object-cover object-[60%_top] sm:object-[center_top] z-0"
//         />

//         {/* Hero Content - Keep original design exactly */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[30vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
//           <div className="max-w-3xl w-full" data-aos="fade-up">
//             <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
//               WELCOME TO <br />
//               <span className="text-3xl sm:text-3xl md:text-6xl">
//                 JURISTQUEST 2025
//               </span>
//             </h1>

//             <p
//               className="text-sm sm:text-base md:text-lg font-medium text-white mt-2 leading-snug"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <span className="block sm:hidden">
//                 India's First-Ever <br />
//                 Prestigious Moot Court <br />
//                 Marathon
//               </span>
//               <span className="hidden sm:inline">
//                 India's First-Ever Prestigious Moot Court Marathon
//               </span>
//             </p>

//             <p
//               className="text-xs sm:text-sm md:text-base font-medium text-white mt-4 leading-snug"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               Conceptualized by Crosby Law Associates in association with
//               <br className="hidden sm:block" />
//               (Mr. Krishna Kumar, Secretary of Madras High Court Advocates
//               Association)
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Clean Popup Modal */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//           <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform animate-popup">
//             {/* Close Button */}
//             <button
//               onClick={closePopup}
//               className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
//             >
//               <X size={16} />
//             </button>

//             {/* Header */}
//             <div className="p-4 pb-2 text-center">
//               <div
//                 className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center"
//                 style={{ backgroundColor: "#6B21A8" }}
//               >
//                 <span className="text-lg">⚖️</span>
//               </div>
//               <h2 className="text-sm font-bold text-gray-800 mb-1">
//                 ⚖️ DEAR BUDDING LAWYERS, THE WAIT IS OVER!
//               </h2>
//               <p className="font-semibold text-xs" style={{ color: "#6B21A8" }}>
//                 🚀 The JuristQuest Moot Problem is Now Live!
//               </p>
//             </div>

//             {/* Content */}
//             <div className="px-4 pb-2">
//               <div className="text-center mb-3">
//                 <p
//                   className="text-gray-700 font-bold text-xs mb-1"
//                   style={{ color: "#6B21A8" }}
//                 >
//                   🎓 Be part of India's Most Prestigious Moot Court Marathon —
//                 </p>
//                 <p className="text-xs text-gray-600 mb-2">
//                   A one-of-a-kind opportunity to debate, defend, and make
//                   history!
//                 </p>
//                 <p className="text-gray-800 font-bold text-xs mb-2">
//                   🏆 AIM HIGH: ATTEMPT TO BREAK THE INDIA BOOK OF RECORDS!
//                 </p>
//                 <p className="text-xs text-gray-600 mb-2">
//                   Register your team and compete to be part of a historic
//                   record-setting moot.
//                 </p>
//                 <p className="text-xs text-gray-600 mb-3">
//                   ✔️ Record-holder certificates for participants of the winning
//                   and qualifying teams.
//                 </p>
//               </div>

//               {/* Why You Shouldn't Miss This Section */}
//               <div className="mb-3">
//                 <h3 className="font-bold text-gray-800 text-xs mb-2">
//                   🔔 WHY YOU SHOULDN'T MISS THIS:
//                 </h3>

//                 <div className="space-y-2">
//                   <div className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
//                     <Target
//                       className="mt-0.5 flex-shrink-0"
//                       style={{ color: "#6B21A8" }}
//                       size={12}
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-xs">
//                         🎯 Special Offer:
//                       </p>
//                       <p className="text-xs text-gray-600">
//                         Get discounted fees for group entries from the same
//                         college/institution!
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
//                     <Users
//                       className="mt-0.5 flex-shrink-0"
//                       style={{ color: "#6B21A8" }}
//                       size={12}
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-xs">
//                         🧑‍💼 Corporate Virtual Internship Program:
//                       </p>
//                       <p className="text-xs text-gray-600">
//                         Limited seats — first-come, first-serve!
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
//                     <Gift
//                       className="mt-0.5 flex-shrink-0"
//                       style={{ color: "#6B21A8" }}
//                       size={12}
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-xs">
//                         🎁 Surprise Giveaway!
//                       </p>
//                       <p className="text-xs text-gray-600">
//                         Tag{" "}
//                         <span
//                           className="font-bold"
//                           style={{ color: "#6B21A8" }}
//                         >
//                           #Juristquest.com
//                         </span>{" "}
//                         in your team registration video on social media and
//                         stand a chance to win a gift voucher!
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
//                     <Award
//                       className="mt-0.5 flex-shrink-0"
//                       style={{ color: "#6B21A8" }}
//                       size={12}
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-xs">
//                         🏅 Become a record-holder:
//                       </p>
//                       <p className="text-xs text-gray-600">
//                         Participate in JuristQuest 2025 and stand tall with an
//                         India Book of Records certificate in your name.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact */}
//               <div
//                 className="p-2 rounded-lg text-center mb-3"
//                 style={{ backgroundColor: "#6B21A8" }}
//               >
//                 <div className="flex items-center justify-center space-x-1 mb-1">
//                   <Phone size={12} style={{ color: "#FFFFFF" }} />
//                   <span className="font-semibold text-white text-xs">
//                     For more information 📞 Call us at
//                   </span>
//                 </div>
//                 <a
//                   href="tel:+919677873855"
//                   className="font-bold hover:opacity-80 transition-colors text-xs"
//                   style={{ color: "#FFFFFF" }}
//                 >
//                   +91-9677873855
//                 </a>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-2 mb-3">
//                 <a
//                   href="/contact-form"
//                   onClick={closePopup}
//                   className="flex-1 py-2 px-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors text-xs text-center"
//                   style={{ backgroundColor: "#6B21A8" }}
//                 >
//                   Register Now
//                 </a>
//                 <button
//                   onClick={closePopup}
//                   className="py-2 px-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-xs"
//                 >
//                   Later
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes popup {
//           from {
//             opacity: 0;
//             transform: scale(0.9) translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }

//         .animate-popup {
//           animation: popup 0.3s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { X, Phone, Gift, Users, Target, Trophy, Award } from "lucide-react";

export default function HeroSection() {
  const scrollRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set image as loaded immediately to avoid delay
    setImageLoaded(true);
  }, []);

  const scrollToSection = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
        {/* Background Image with optimized loading */}
        <img
          src="/assets/new-2.png"
          loading="eager"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-[60%_top] sm:object-[center_top] z-0"
        />

        {/* Hero Content - Keep original design exactly */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[30vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
          <div className="max-w-3xl w-full" data-aos="fade-up">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
              WELCOME TO <br />
              <span className="text-3xl sm:text-3xl md:text-6xl">
                JURISTQUEST 2025
              </span>
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg font-medium text-white mt-2 leading-snug"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="block sm:hidden">
                India's First-Ever <br />
                Prestigious Moot Court <br />
                Marathon
              </span>
              <span className="hidden sm:inline">
                India's First-Ever Prestigious Moot Court Marathon
              </span>
            </p>

            <p
              className="text-xs sm:text-sm md:text-base font-medium text-white mt-4 leading-snug"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Conceptualized by Crosby Law Associates in association with
              <br className="hidden sm:block" />
              (Mr. Krishna Kumar, Secretary of Madras High Court Advocates
              Association)
            </p>
          </div>
        </div>
      </section>

      {/* Clean Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden transform animate-popup max-w-[95vw] sm:max-w-2xl">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="p-4 sm:p-6 pb-2 sm:pb-4 text-center">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                style={{ backgroundColor: "#6B21A8" }}
              >
                <span className="text-lg sm:text-xl">⚖️</span>
              </div>
              <h2 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                ⚖️ DEAR BUDDING LAWYERS, THE WAIT IS OVER!
              </h2>
              <p
                className="font-semibold text-xs sm:text-sm"
                style={{ color: "#6B21A8" }}
              >
                🚀 The JuristQuest Moot Problem is Now Live!
              </p>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 pb-3 sm:pb-4">
              <div className="text-center mb-3 sm:mb-4">
                <p
                  className="text-gray-700 font-bold text-xs sm:text-sm mb-1 sm:mb-2"
                  style={{ color: "#6B21A8" }}
                >
                  🎓 Be part of India's Most Prestigious Moot Court Marathon —
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  A one-of-a-kind opportunity to debate, defend, and make
                  history!
                </p>
                <p className="text-gray-800 font-bold text-xs sm:text-sm mb-2 sm:mb-3">
                  🏆 AIM HIGH: ATTEMPT TO BREAK THE INDIA BOOK OF RECORDS!
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Register your team and compete to be part of a historic
                  record-setting moot.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  ✔️ Record-holder certificates for participants of the winning
                  and qualifying teams.
                </p>
              </div>

              {/* Why You Shouldn't Miss This Section */}
              <div className="mb-3 sm:mb-4">
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-2 sm:mb-3">
                  🔔 WHY YOU SHOULDN'T MISS THIS:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Target
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#6B21A8" }}
                      size={14}
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                        🎯 Special Offer:
                      </p>
                      <p className="text-xs text-gray-600">
                        Get discounted fees for group entries from the same
                        college/institution!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Users
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#6B21A8" }}
                      size={14}
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                        🧑‍💼 Corporate Virtual Internship Program:
                      </p>
                      <p className="text-xs text-gray-600">
                        Limited seats — first-come, first-serve!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Gift
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#6B21A8" }}
                      size={14}
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                        🎁 Surprise Giveaway!
                      </p>
                      <p className="text-xs text-gray-600">
                        Tag{" "}
                        <span
                          className="font-bold"
                          style={{ color: "#6B21A8" }}
                        >
                          #Juristquest.com
                        </span>{" "}
                        in your team registration video on social media and
                        stand a chance to win a gift voucher!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Award
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#6B21A8" }}
                      size={14}
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                        🏅 Become a record-holder:
                      </p>
                      <p className="text-xs text-gray-600">
                        Participate in JuristQuest 2025 and stand tall with an
                        India Book of Records certificate in your name.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div
                className="p-2 sm:p-3 rounded-lg text-center mb-3 sm:mb-4"
                style={{ backgroundColor: "#6B21A8" }}
              >
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Phone size={12} style={{ color: "#FFFFFF" }} />
                  <span className="font-semibold text-white text-xs sm:text-sm">
                    For more information 📞 Call us at
                  </span>
                </div>
                <a
                  href="tel:+919677873855"
                  className="font-bold hover:opacity-80 transition-colors text-xs sm:text-sm"
                  style={{ color: "#FFFFFF" }}
                >
                  +91-9677873855
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4">
                <a
                  href="/contact-form"
                  onClick={closePopup}
                  className="flex-1 py-2 sm:py-3 px-4 sm:px-6 text-white font-semibold rounded-lg hover:opacity-90 transition-colors text-xs sm:text-sm text-center"
                  style={{ backgroundColor: "#6B21A8" }}
                >
                  Register Now
                </a>
                <button
                  onClick={closePopup}
                  className="py-2 sm:py-3 px-4 sm:px-6 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-popup {
          animation: popup 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

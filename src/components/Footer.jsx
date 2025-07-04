import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const [active, setActive] = useState(null);

  const toggle = (section) => {
    setActive(active === section ? null : section);
  };

  return (
    <footer className="bg-white font-['Lato'] border-t border-gray-200 text-sm">
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-12 pt-16 pb-8 px-6">
        {/* Left Column */}
        <div className="space-y-4">
          <img
            src="/assets/new-logo-2.png"
            alt="JuristQuest Logo"
            className="w-40 mb-2"
          />
          <p className="text-gray-700 max-w-xs">
            JuristQuest is a premier moot court competition created to elevate
            the standards.
          </p>

          <div className="flex gap-4 mt-4 text-purple-800 text-base">
            <a href="#" className="hover:text-purple-900 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-purple-900 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-900 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-purple-900 transition">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Designed And Developed By &nbsp;
            <a
              href="https://vulturelines.com/"
              target="blank"
              className="text-purple-900 hover:underline "
            >
              VLT
            </a>
          </p>
        </div>

        {/* Center Column */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2 text-purple-800">
              • QUICK LINKS
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#registrations">Registrations</a>
              </li>
              <li>
                <a href="#rules">Rules & Guidelines</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:invisible">&nbsp;</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="/aboutus">our partners</a>
              </li>
              <li>
                <a href="#faqs">FAQ's</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h4 className="font-bold mb-3 flex items-center gap-2 text-purple-800">
            <FaPhoneAlt /> CONTACT US
          </h4>
          <div className="flex items-start gap-3 text-black">
            <FaPhoneAlt className="mt-1 text-purple-800" />
            <span>+91-9677883855</span>
          </div>
          <div className="flex items-start gap-3 text-black">
            <FaEnvelope className="mt-1 text-purple-800" />
            <span>info@juristquest.com</span>
          </div>
          <div className="flex items-start gap-3 text-black">
            <FaMapMarkerAlt className="mt-1 text-purple-800" />
            <span>
              7th Floor, Centre Point, 2/4, Mount Pollamallee High Road,
              Manapakkam, Porur, Chennai, Tamil Nadu 600089
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Style */}
      <div className="md:hidden px-6 pt-10 pb-6 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/assets/new-logo-2.png"
            alt="JuristQuest Logo"
            className="w-28"
          />
        </div>

        {/* Accordion Section */}
        <div className="space-y-3">
          {/* Quick Links */}
          <div className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggle("links")}
              className="w-full flex justify-between items-center px-4 py-3 font-semibold"
            >
              Quick links
              <span>{active === "links" ? "▲" : "▼"}</span>
            </button>
            {active === "links" && (
              <ul className="px-4 pb-3 text-gray-700 space-y-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#registrations">Registrations</a>
                </li>
                <li>
                  <a href="#rules">Rules & Guidelines</a>
                </li>
                <li>
                  <a href="/aboutus">our partners</a>
                </li>
                <li>
                  <a href="#faqs">FAQ's</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            )}
          </div>

          {/* Top Destination
          <div className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggle("dest")}
              className="w-full flex justify-between items-center px-4 py-3 font-semibold"
            >
              Top Destination
              <span>{active === "dest" ? "▲" : "▼"}</span>
            </button>
            {active === "dest" && (
              <ul className="px-4 pb-3 text-gray-700 space-y-2">
                <li><a href="#">Chennai</a></li>
                <li><a href="#">Delhi</a></li>
                <li><a href="#">Hyderabad</a></li>
                <li><a href="#">Mumbai</a></li>
              </ul>
            )}
          </div> */}

          {/* Contact Us */}
          <div className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggle("contact")}
              className="w-full flex justify-between items-center px-4 py-3 font-semibold"
            >
              Contact Us
              <span>{active === "contact" ? "▲" : "▼"}</span>
            </button>
            {active === "contact" && (
              <div className="px-4 pb-3 text-gray-700 space-y-3">
                <div className="flex items-start gap-2">
                  <FaPhoneAlt className="mt-1 text-purple-800" />
                  +91-9677883855
                </div>
                <div className="flex items-start gap-2">
                  <FaEnvelope className="mt-1 text-purple-800" />{" "}
                  info@juristquest.com
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 text-purple-800" /> 7th Floor,
                  Centre Point, 2/4, Mount Pollamallee High Road, Manapakkam,
                  Porur, Chennai, Tamil Nadu 600089
                </div>
              </div>
            )}
          </div>

          {/* Follow Us */}
          <div className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggle("social")}
              className="w-full flex justify-between items-center px-4 py-3 font-semibold"
            >
              Follow us
              <span>{active === "social" ? "▲" : "▼"}</span>
            </button>
            {active === "social" && (
              <div className="flex justify-center gap-4 px-4 pb-4 text-purple-800 text-lg">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Designed And Developed By &nbsp;
          <a
            href="https://vulturelines.com/"
            target="_blank"
            className="text-purple-900 hover:underline"
          >
            VLT
          </a>
        </p>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-200 py-4">
        © {new Date().getFullYear()} Jurist Quest - A product of Crosby Law
        Associates and copyright reserved for Crosby Law Associates only.
      </div>
    </footer>
  );
}

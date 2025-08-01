import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Herosection from "./components/Herosection";
import Registrations from "./components/Registrations";
// import Posts from './components/Posts';
import ContactUs from "./components/ContactUs";
import RulesandGuidelines from "./components/RulesandGuidelines";
import OurTeam from "./components/OurTeam";
import FAQChat from "./components/FAQChat";
import About from "./components/About";
import OurvisionMision from "./components/OurvisionMision";
import Whoweare from "./components/Whoweare";
// Inner Pages

import OurPartners from "./components/InnerPages/OurPartners";
import Submitform from "./components/InnerPages/Submitform";

import CommitteeMembers from "./components/CommitteeMembers";
import Invoice from "./components/InnerPages/Invoice";
import { useEffect } from "react";

function Home() {
  return (
    <>
      <FAQChat />

      <Herosection />

      <div id="about">
        <About />
      </div>

      <OurvisionMision />

      <div id="registrations">
        <Registrations />
      </div>

      <Whoweare />

      <div id="rules">
        <RulesandGuidelines />
      </div>

      <OurTeam />

      <CommitteeMembers />

      {/* <div id="faqs">
        <FAQ />
      </div> */}

      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-white relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/contact-form" element={<Submitform />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

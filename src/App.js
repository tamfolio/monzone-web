import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import TermsConditions from "./Pages/Terms_Conditions/TermsConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import NavbarTwo from "./Components/Navbar/NavbarTwo";

function App() {
  const location = useLocation();

  const showNavbarTwo = location.pathname === "/terms&conditions" || location.pathname === "/privacy-policy";

  return (
    <>
       {showNavbarTwo ? <NavbarTwo /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms_of_use" element={<TermsConditions />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import TermsConditions from "./Pages/Terms_Conditions/TermsConditions";
import NavbarTwo from "./Components/Navbar/NavbarTwo";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/terms&conditions" ? <NavbarTwo /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

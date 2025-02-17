import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/common/Header";
import Footer from "./components/common/Footer";
import Services from "./components/Services/Services";
import HowIt from "./components/How it/HowItWork";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact us/Contactus";
import Terms from "./components/Terms/Terms";
import PrivacyPolicy from "./components/Privacy policy/Privacy";
import Apply from "./components/Apply now/Applynow";
import Childpoll from "./components/Forms/Childpoll";
import Familypoll from "./components/Forms/Familypoll";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/howit" element={<HowIt />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/applynow" element={<Apply />} />
        <Route path="/childpoll" element={<Childpoll />} />
        <Route path="/familypoll" element={<Familypoll />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { useState } from "react";
import "../styles/App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import ContactUs from "./pages/ContactUs";
import ClientServices from "./pages/ClientServices";
import OurTeam from "./pages/OurTeam";
import ProspectiveMembers from "./pages/ProspectiveMembers";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="client-services" element={<ClientServices />} />
        <Route path="prospective-members" element={<ProspectiveMembers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { useState } from "react";
import {
  BrowserRouter,
  NavLink,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../styles/App.css";
import Header from "./components/HeaderComponents/Header";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";

import OurTeam from "./pages/OurTeam";
import ClientServices from "./pages/ClientServices";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/Error";
import ProspectiveMembers from "./pages/ProspectiveMembers";

function App() {
  const router = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="team" element={<OurTeam />} />
        <Route path="clients" element={<ClientServices />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );

  return (
    <div>
      {router}
    </div>
  );
}

export default App;

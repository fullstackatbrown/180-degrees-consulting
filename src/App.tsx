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
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/Error";
import ApplyPage from "./pages/Apply";
import ProspectiveMembers from "./pages/ProspectiveMembers";
import { ClientServices } from "./pages/ClientServices";

function App() {
  const router = (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="team" element={<OurTeam />} />
        <Route path="clients" element={<ClientServices />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="apply" element={<ProspectiveMembers />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

  return <div>{router}</div>;
}

export default App;

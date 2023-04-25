import { useState } from "react";
import "../styles/App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import AboutUs from "./components/AboutUsComponents/AboutUs";
import ClientServicesPage from "./pages/ClientServices";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Route path="/" Component={LandingPage}></Route>
      <Route path="/faq" Component={LandingPage}></Route>
      <Route path="/aboutus" Component={LandingPage}></Route>
      <Route path="/clientservices" Component={ClientServicesPage}></Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
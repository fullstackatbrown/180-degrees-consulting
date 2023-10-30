import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "../styles/App.css";
import Header from "./components/HeaderComponents/Header";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ClientServices from "./pages/ClientServices";
import ContactUs from "./pages/ContactUs";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     element: <Header></Header>,
  //     children: [
  //       {
  //         path: "/",
  //         element: <AboutUs></AboutUs>,
  //       },
  //       {
  //         path: "/AboutUs",
  //         element: <AboutUs></AboutUs>,
  //       },
  //       {
  //         path: "/OurTeam",
  //         element: <OurTeam></OurTeam>,
  //       },
  //       {
  //         path: "/ClientServices",
  //         element: <ClientServices></ClientServices>,
  //       },
  //       {
  //         path: "/FAQPage",
  //         element: <FAQPage></FAQPage>,
  //       },
  //       {
  //         path: "/ContactUs",
  //         element: <ContactUs></ContactUs>,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div>
      <Header />
      {/* <AboutUs /> */}
      {/* <FAQPage></FAQPage> */}
      {/* <RouterProvider router={router} /> */}
      <Footer />
    </div>
  );
}

export default App;

import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/ContactUsComponents/GetInTouch";

function LandingPage() {
  return (
    <>
      <Header />
      Contact Us
      <GetInTouch />
      <Footer />
    </>
  );
}

export default LandingPage;

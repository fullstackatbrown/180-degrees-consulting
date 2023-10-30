import Footer from "../components/Footer";
import Header from "../components/HeaderComponents/Header";
import AboutUsBanner from "../components/AboutUsComponents/AboutUsBanner";
import AboutUsBody from "../components/AboutUsComponents/AboutUsBody";

function AboutUs() {
  return (
    <div className="Page" id="AboutUs">
      {/* <Header /> */}
      <AboutUsBanner />
      <AboutUsBody />
      {/* <Footer /> */}
    </div>
  );
}

export default AboutUs;

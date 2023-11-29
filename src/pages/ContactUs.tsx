import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/ContactUsComponents/GetInTouch";
import CampusImage from "../components/ContactUsComponents/CampusImage";

function ContactUs() {
  return (
    <div id="PageTop">
      {/* <Header/> */}
      <CampusImage />
      <GetInTouch />
      {/* <Footer /> */}
    </div>
  );
}

export default ContactUs;

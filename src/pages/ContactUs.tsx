import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/ContactUsComponents/GetInTouch";
import CampusImage from "../components/ContactUsComponents/CampusImage";

function ContactUs() {
    return (<>
    <Header/>
    <CampusImage/>
    <GetInTouch/>
    <Footer/>
    </>
  );
}

export default ContactUs;

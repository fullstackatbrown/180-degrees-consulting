import { render } from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/ContactUsComponents/GetInTouch";

function LandingPage() {
    return (<>
    <Header/>
    <GetInTouch/>
    <Footer/>
    </>
    )
}   

export default LandingPage;
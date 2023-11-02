import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";
import BannerImage from "../components/ProspectiveMembersComponents/BannerImage";
import Timeline from "../components/ProspectiveMembersComponents/Timeline";

function ProspectiveMembers() {
    return (<>
    <Header/>
    <BannerImage/>
    <Timeline/>
    <Footer/>
    </>
  );
}

export default ProspectiveMembers;

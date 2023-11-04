import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import BannerImage from "../components/LandingPageComponents/BannerImage";
import Questions from "../components/LandingPageComponents/Questions";
import MissionStatement from "../components/LandingPageComponents/MissionStatement";
import PreviousClients from "../components/LandingPageComponents/PreviousClients";
import UpcomingEvents from "../components/LandingPageComponents/UpcomingEvents";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <BannerImage />
      <MissionStatement />
      <UpcomingEvents />
      <PreviousClients />
      <Questions />
      <Footer />
    </>
  );
}

export default LandingPage;

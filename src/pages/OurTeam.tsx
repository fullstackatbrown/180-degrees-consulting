import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";
import GroupPhoto from "../components/OurTeamComponents/GroupPhoto";
import ExecutiveBoard from "../components/OurTeamComponents/ExecutiveBoard";
import TeamLeads from "../components/OurTeamComponents/TeamLeads";
import SeniorAdvisers from "../components/OurTeamComponents/SeniorAdvisers";

function LandingPage() {
  return (
    <>
      <Header />
      Our Team
      <GroupPhoto />
      <ExecutiveBoard />
      <TeamLeads />
      <SeniorAdvisers />
      <Footer />
    </>
  );
}

export default LandingPage;

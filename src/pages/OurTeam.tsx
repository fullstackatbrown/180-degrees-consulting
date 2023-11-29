import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";

import GroupPhoto from "../components/OurTeamComponents/GroupPhoto";
/*import ExecutiveBoard from "../components/OurTeamComponents/ExecutiveBoard"
import TeamLeads from "../components/OurTeamComponents/TeamLeads"*/
import SeniorAdvisers from "../components/OurTeamComponents/SeniorAdvisers";

function OurTeam() {
  return (
    <div id="OurTeamPageTop">
      {/* <Header/> */}
      <h1>Our Team</h1>
      <GroupPhoto />
      <SeniorAdvisers />
      {/* <Footer/> */}
    </div>
  );
}

export default OurTeam;

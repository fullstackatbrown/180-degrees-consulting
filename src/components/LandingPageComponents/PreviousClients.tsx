import prevClients from "./previousClients.png";
import { useNavigate } from "react-router-dom";
import "./styles/PreviousClientsStyle.css";

function PreviousClients() {
  const navigate = useNavigate();
  return (
    <div id="LandingPageClients">
      <h3 id="Heading">Previous Clients</h3>
      <img src={prevClients} alt="previous clients" id="prevClients" />
      <br />
      <div id="spacerDiv"/>
    </div>
  );
}

export default PreviousClients;

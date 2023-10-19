import prevClients from './previousClients.png';
import { useNavigate } from 'react-router-dom'
import './styles/PreviousClientsStyle.css'

function PreviousClients(){
   const navigate = useNavigate();
    return <div> <h3 id="prevClientsHeading">Previous Clients</h3> 
    <img src={prevClients} alt="previous clients" id="prevClients"/>
    <br/>
    <button onClick={() => navigate("/about-us")}>
       Learn About Our Services
    </button>
    </div>
  }
  
  export default PreviousClients;
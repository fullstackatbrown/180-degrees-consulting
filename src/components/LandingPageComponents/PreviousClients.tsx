import prevClients from './previousClients.png';
import './styles/PreviousClientsStyle.css'

/* make button go to proper page */


function PreviousClients(){
    return <div> <div className = 'text'>
      <h3 id = "prev_client_text"> Previous Clients</h3> 
      </div>
    <img src={prevClients} alt="previous clients" id="prevClients"/> 
    <div id="white_space_clients"></div>
    <button id = "learn_more_button">
       Learn About Our Services
    </button>
    </div>
  }
  
  export default PreviousClients;
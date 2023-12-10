import './styles/CampusBanner.css'
import campus from "./campus.png";

function CampusImage(){
    return <div>
        <img id="campusPic" src={campus} style ={{height: 900, paddingBottom: '0px'}}/>
    </div>
}

export default CampusImage;
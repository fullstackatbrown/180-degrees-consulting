import './styles/CampusBanner.css'
import campus from "./campus.png";
import whiteBox from "./whiteBox.png";

function CampusImage(){
    return <div className='testing'>
        < img id="campusPic" src={campus}/>
        < img id="whiteBox" src={whiteBox}/>
    </div>
}

export default CampusImage;
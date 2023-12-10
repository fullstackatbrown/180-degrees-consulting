import box from "./background2.png";


function GetInTouch(){
  return <div>
    < img style={{ height: "550px", width: '100%', position: "relative", paddingTop: '167px', paddingBottom: '0px', opacity: 0.8 }} src={box}/>
    <p>
      <a href = "mailto:180degrees@brown.edu" style={{ color: '#4A5557', fontSize: "25px", right: -195, top: - 430, position: "relative" }} > 180degrees@brown.edu </a>
    </p>
    <p>
        <a href = "https://www.instagram.com/brown180dc/" target="_blank" rel="noopener noreferrer" style={{ color: '#4A5557', right: -130, top: - 375, position: "relative", fontSize: "25px"}}>
      brown180dc
        </a>
    </p>
    <p>
      <a href = "https://www.facebook.com/180dcbrown/" target="_blank" rel="noopener noreferrer" style={{ color: '#4A5557', right: -225, top: - 315, position: "relative", fontSize: "25px" }} > Brown 180 DC Facebook Page </a>
    </p>
  </div>
}


export default GetInTouch;
import box from "./box.png";


function GetInTouch(){
  return <div>
    < img style={{ height: "800px", width: '100%', position: "relative", paddingTop: '120px', paddingBottom: '20px' }} src={box}/>
    <p>
      <a href = "mailto:180degrees@brown.edu" style={{ color: '#4A5557', fontSize: "25px", right: -200, top: -610, position: "relative" }} > 180degrees@brown.edu </a>
    </p>
    <p>
        <a href = "https://www.instagram.com/brown180dc/" style={{ color: '#4A5557', right: -135, top: - 560, position: "relative", fontSize: "25px"}}>
      brown180dc
        </a>
    </p>
    <p>
      <a href = "https://www.facebook.com/180dcbrown/" style={{ color: '#4A5557', right: -235, top: - 450, position: "relative", fontSize: "25px" }} > Brown 180 DC Facebook Page </a>
    </p>
  </div>
}


export default GetInTouch;
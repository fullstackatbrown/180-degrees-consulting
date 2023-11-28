import './styles/Banner.css'
import campus from "./grass.png";

function BannerImage(){
    return <div id = "Members">
        <img id="grassPic" src={campus}/>
        <h2 id = "information">
            Application Information
        </h2>
        <h3 id = "des">
            Join our team for unique opportunities, valuable experiences,
            and a lifetime of community!
        </h3>
        <div
        >
            <a
                href="https://www.180dc.org/join-the-global-team/join-the-global-team-application-form"
            >
                <button id = "button"
                        style={{
                            position: "absolute",
                            color: "#83AE4D",
                            border: "1px solid #ffffff",
                            backgroundColor:'#FFFFFF',
                            paddingRight: "50px",
                            paddingLeft: "50px",
                            justifyContent: "center",
                            borderRadius: "70px",
                            fontFamily: "Mulish",
                            fontSize: "25px",
                            alignItems: "center",
                        }}>
                    <p>Apply Here!</p>
                </button>
            </a>
        </div>
    </div>
}
  
  export default BannerImage;
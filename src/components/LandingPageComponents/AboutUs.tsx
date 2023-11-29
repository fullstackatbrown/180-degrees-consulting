import "./styles/AboutUsStyle.css";
import AboutUsPNG from "/src/images/AboutUsBody.png";

function AboutUs() {
  return (
    <div id="LandingPageAboutUs" className="AboutBody">
      <h2 className="AboutMission">Our Mission</h2>
      <img
        className="AboutImage"
        src={AboutUsPNG}
        alt="We are committed to working with non-profits and social enterprises within the local Providence community, supporting them to achieve and expand their goals."
      ></img>
    </div>
  );
}

export default AboutUs;

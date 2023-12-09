import "./styles/Banner.css";
import pvd from "./pvd.jpeg";

function BannerImage() {
  return (
    <div className="banner-container">
      <img id="pvdBanner" src={pvd} />
      <h1 id="clubNameText">
        180 Degrees Consulting <br /> — Brown University —{" "}
      </h1>
    </div>
  );
}

export default BannerImage;

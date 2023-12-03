import "./style.css";
import pvd from "./pvd.png";

export function BannerImage() {
  return (
    <div className="container-1">
      <img id="pvd" src={pvd} />
      <h1 id="clubNameText">Client Services</h1>
    </div>
  );
}

export default BannerImage;

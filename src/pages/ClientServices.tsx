import { ClientTestimonials } from "../components/ClientServicesComponents/ClientTestimonials";
import { CurrentClients } from "../components/ClientServicesComponents/CurrentClients";
import { PreviousClients } from "../components/ClientServicesComponents/PreviousClients";
import { BannerImage } from "../components/ClientServicesComponents/BannerImage";
import { useNavigate } from "react-router-dom";
export function ClientServices() {
  const navigate = useNavigate();
  return (
    <div>
      <BannerImage />
      <CurrentClients />
      <ClientTestimonials />
      <PreviousClients />
      <button id="button" onClick={() => navigate("/apply")}>
        Apply Now
      </button>
      <p></p>
    </div>
  );
}

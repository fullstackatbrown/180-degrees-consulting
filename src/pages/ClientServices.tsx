import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";
import ClientServicesBanner from "../components/ClientServicesComponents/ClientServicesBanner";
import CurrentClients from "../components/ClientServicesComponents/CurrentClients";
import PreviousClients from "../components/ClientServicesComponents/PreviousClients";
import Testimonials from "../components/ClientServicesComponents/Testimonials";

export default function ClientServices() {
  return (
    <div>
      <Header />
      Client
      <ClientServicesBanner />
      <CurrentClients />
      <Testimonials />
      <PreviousClients />
      <Footer />
    </div>
  );
}

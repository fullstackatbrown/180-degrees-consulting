import Card from "@mui/material/Card";
import { getFirebase } from "../../firebase/getFirebase";
import { useEffect, useState } from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

interface Client {
  companyName: string;
  logoLink: string;
  quote: {
    author: string;
    body: string;
  };
}

export function ClientTestimonials() {
  const [clientTestimonials, setClientTestimonials] = useState<Client[]>([]);
  useEffect(() => {
    getFirebase("clients", "client-testimonials", "client-array").then(
      (field: Client[]) => {
        setClientTestimonials(field);
      }
    );
  }, []);

  return (
    <div>
      <h2 id="Heading">Client Testimonials</h2>
      <Card className="card">
        <Carousel>
          {clientTestimonials.map((client) => (
            <>
              <Carousel.Item>
                <Carousel.Caption>
                  <p>{client.quote.body}</p>
                  <p>-{client.quote.author}</p>
                  <img src={client.logoLink} alt={client.companyName} />
                </Carousel.Caption>
              </Carousel.Item>
              <b>_</b>
            </>
          ))}
        </Carousel>
      </Card>
    </div>
  );
}

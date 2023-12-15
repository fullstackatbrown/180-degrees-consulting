import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { getFirebase } from "../../firebase/getFirebase";
import "./style.css";

interface Client {
  name: string;
  logo: string;
}

export function PreviousClients() {
  const [previousClients, setPreviousClients] = useState<Client[]>([]);

  useEffect(() => {
    getFirebase("clients", "previous-clients", "client-array").then(
      (field: Client[]) => {
        setPreviousClients(field);
      }
    );
  }, []);

  return (
    <div>
      <h2 id="Heading">Previous Clients</h2>
      <div className="image-container">
        {previousClients.map((client) => (
          <>
            <Card className="previous-card">
              {/* <h3>{client.name}</h3> */}
              <img
                className="previous-logo"
                src={client.logo}
                alt={client.name}
              />
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}

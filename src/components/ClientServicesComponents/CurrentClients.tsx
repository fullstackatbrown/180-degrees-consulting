import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ref } from "firebase/storage";
import { getFirebase } from "../../firebase/getFirebase";
import "./style.css";

interface Client {
  name: string;
  logo: string;
}

export function CurrentClients() {
  const [currentClients, setCurrentClients] = useState<Client[]>([]);

  useEffect(() => {
    getFirebase("clients", "current-clients", "client-array").then(
      (field: Client[]) => {
        setCurrentClients(field);
      }
    );
  }, []);

  return (
    <div>
      <h2 id="Heading">Current Clients</h2>
      {currentClients.map((client) => (
        <>
          <Card className="card">
            <h3>{client.name}</h3>
            <img src={client.logo} alt={client.name} />
          </Card>
          <b>_</b>
        </>
      ))}
    </div>
  );
}

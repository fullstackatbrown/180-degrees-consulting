import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Box, Card, Collapse } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ref } from "firebase/storage";
import { getFirebase } from "../../firebase/getFirebase";
import "./style.css";
import { ClientCard } from "./ClientCard";

interface Client {
  name: string;
  logo: string;
  description: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function CurrentClients() {
  const [currentClients, setCurrentClients] = useState<Client[]>([]);
  const [oddClient, setOddClient] = useState<Client | undefined>(undefined);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getFirebase("clients", "current-clients", "client-array").then(
      (field: Client[]) => {
        if (field.length % 2 === 1) {
          setOddClient(field.pop());
        } else {
          setOddClient(undefined);
        }
        setCurrentClients(field);
      }
    );
  }, []);

  return (
    <div>
      <h2 id="Heading">Current Clients</h2>
      <div className="current-grid-container">
        {currentClients.map((client) => (
          <ClientCard client={client} />
        ))}
      </div>
      <h1></h1>
      <div>
        <></>
        {oddClient !== undefined ? <ClientCard client={oddClient} /> : <></>}
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { Box, Card, Collapse } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CurrentClients } from "./CurrentClients";

import { ref } from "firebase/storage";
import { getFirebase } from "../../firebase/getFirebase";
import "./style.css";

interface Client {
  name: string;
  logo: string;
  description: string;
}

interface ClientProps {
  client: Client;
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

export function ClientCard(props: ClientProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(
        expanded ? "${contentRef.current.scrollHeight}px" : "40vh"
      );
    }
  }, [expanded]);

  return (
    <Card
      className="card"
      style={{
        height: contentHeight,
        position: "relative",
        margin: "auto",
        width: "40vw",
      }}
    >
      {/* <h3>{props.client.name}</h3> */}
      <img
        className="current-logo"
        src={props.client.logo}
        alt={props.client.name}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className="description">
            {props.client.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

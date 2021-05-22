import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImageAvatar from "./ImageAvatar";

const useStyles = makeStyles({
  root: {
    marginTop: 90,
    textAlign: "center",
    padding: 10,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{itemAlign: "center"}}>
      <ImageAvatar />
      </div>
      <Typography gutterBottom variant="h5" component="h2">
        Kristina Wallace
      </Typography>
      <Typography gutterBottom variant="subtitle1" color="textSecondary">
        Full-stack software developer student. Aviatrix. Space asset accountant. Tea lover.
        Adventuress. She/Her. за мной!


      </Typography>
    </div>
  );
}

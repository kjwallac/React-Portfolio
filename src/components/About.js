import React, { useRef, useEffect } from "react";
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

export default function About({ userFocus }) {
  const classes = useStyles();
  const titleRef = useRef(null);
  useEffect(() => {
    if (userFocus === "about") {
      titleRef.current.scrollIntoView(true);
      const scrolledY = window.scrollY;

      if (scrolledY) {
        window.scroll(0, scrolledY - 72);
      }
    }
  }, [userFocus]);

  return (
    <div className={classes.root} id={"about"} ref={titleRef}>
      <div style={{ itemAlign: "center" }}>
        <ImageAvatar />
      </div>
      <Typography gutterBottom variant="h5" component="h2">
        Kristina Wallace
      </Typography>
      <Typography gutterBottom variant="subtitle1" color="textSecondary">
        Full-stack software developer passionate about building things that make
        a difference. Aviatrix. Space asset accountant. Tea lover. Adventuress.
        She/Her. за мной!
      </Typography>
    </div>
  );
}

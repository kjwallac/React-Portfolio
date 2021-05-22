import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FlareIcon from "@material-ui/icons/Flare";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 10,
    margin: "auto",
    maxWidth: 1200,
  },
  work: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#60557c",
    color: "white",
  },
  icon: {
    fontSize: "xl",
    color: "#60557c",
    padding: 10,
  },
});

export default function Contact({ userFocus }) {
  const classes = useStyles();
  const titleRef = useRef(null);
  useEffect(() => {
    if (userFocus === "contact") {
      titleRef.current.scrollIntoView();
    }
  }, [userFocus]);

  return (
    <div className={classes.root} id={"contact"} ref={titleRef}>
      <Typography variant="h6" className={classes.work}>
        Get in Touch
      </Typography>
      <div>
        <FlareIcon className={classes.icon} />{" "}
        <Link
          target="_blank"
          color="inherit"
          href="https://www.linkedin.com/in/kristina-wallace-880a8b57/"
        >
          <LinkedInIcon className={classes.icon} />
        </Link>{" "}
        <Link
          target="_blank"
          color="inherit"
          href="https://github.com/kjwallac"
        >
          <GitHubIcon className={classes.icon} />
        </Link>{" "}
        <FlareIcon className={classes.icon} />
      </div>
    </div>
  );
}

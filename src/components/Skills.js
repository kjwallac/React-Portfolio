import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FlareIcon from "@material-ui/icons/Flare";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const skillData = [
  { skill: "HTML/CSS" },
  { skill: "Javascript" },
  { skill: "NodeJs" },
  { skill: "API" },
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "Express" },
  { skill: "React" },
];

export default function Skills({ userFocus }) {
  const classes = useStyles();
  const titleRef = useRef(null);
  useEffect(() => {
    if (userFocus === "skills") {
      titleRef.current.scrollIntoView(true);
      const scrolledY = window.scrollY;

      if (scrolledY) {
        window.scroll(0, scrolledY - 72);
      }
    }
  }, [userFocus]);

  return (
    <div className={classes.root} ref={titleRef} id="skills">
      {skillData.map((skill) => (
        <Chip
          key={skill.skill}
          icon={<FlareIcon fontSize="small" style={{ color: "white" }} />}
          label={skill.skill}
          style={{ backgroundColor: "#60557c", color: "white" }}
        />
      ))}
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FlareIcon from "@material-ui/icons/Flare";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 64,
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
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "Express" },
  { skill: "React" },
];

export default function OutlinedChips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {skillData.map((skill) => (
        <Chip key={skill.skill} icon={<FlareIcon fontSize="small" style={{ color: "white" }}/>} label={skill.skill} style={{backgroundColor: '#60557c', color: "white"}}/>
      ))}
    </div>
  );
}

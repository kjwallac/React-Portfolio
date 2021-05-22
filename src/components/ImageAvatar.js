import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    display: 'flex',
  },
    alignItemsAndJustifyContent: {
      width: "100%",
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.alignItemsAndJustifyContent}>
      <Avatar
        alt="Kristina Wallace"
        src="/images/kristinapic.png"
        className={classes.large}
      />
    </div>
  );
}

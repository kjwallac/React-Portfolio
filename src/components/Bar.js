import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    alignText: "center",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <StarOutlineIcon className={classes.icon} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.menu}
          >
            <Link href="#" color="inherit" className={classes.links}>
              Home
            </Link>
          
            <Link href="#" color="inherit" className={classes.links}>
              About
            </Link>

            <Link href="#" color="inherit" className={classes.links}>
              Works
            </Link>

            <Link href="#" color="inherit" className={classes.links}>
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

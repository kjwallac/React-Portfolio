import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import tileData from "./tileData";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    padding: 20,
  },
  gridList: {
    maxWidth: 1200,
    padding: 10,
    justifyContent: "space-evenly",
  },
  icon: {
    color: "white",
  },
  tileBar: {
    height: 150,
    background: "rgba(0, 0, 0, 0.7)",
  },
  work: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#60557c",
    color: "white",
  },
  tile: {
    maxWidth: 375,
    maxHeight: 375,
  },
  // MuiGridListTileBar: {
  //   background: "rgba(0, 0, 0, 0.7)",
  // },
}));



export default function Projects() {
  const classes = useStyles();

  return (
    <Grid
    container
    direction="row"
    justify="space-evenly"
    alignItems="center" 
    className={classes.root}>
      <GridList spacing={15} cellHeight={400} className={classes.gridList}>
        <GridListTile cols={2} style={{ height: "auto" }}>
          <Typography variant="h6" className={classes.work}>
            Check out my work
          </Typography>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile className={classes.tile} key={tile.img} >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              className={classes.tileBar}
              title={<h3>{tile.title}</h3>}
              subtitle={
                <h2>
                  <Link target="_blank" color="inherit" href={tile.app}>
                    {tile.title} Deployed App
                  </Link>
                </h2>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <Link target="_blank" color="inherit" href={tile.repo}>
                    <GitHubIcon />
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
}

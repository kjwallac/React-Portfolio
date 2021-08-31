import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import FlareIcon from "@material-ui/icons/Flare";
import React, { useState, useEffect, useRef } from "react";

const headersData = [
  {
    label: "Home",
    userFocus: "home",
  },
  {
    label: "About",
    userFocus: "about",
  },
  {
    label: "Skills",
    userFocus: "skills",
  },

  {
    label: "Projects",
    userFocus: "projects",
  },
  {
    label: "Contact",
    userFocus: "contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#60557C",
    flexGrow: 1,
    alignItems: "center",

    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header({ setUserFocus, userFocus }) {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();
  const titleRef = useRef(null);
  useEffect(() => {
    if (userFocus === "home") {
      titleRef.current.scrollIntoView(true);
      const scrolledY = window.scrollY;

      if (scrolledY) {
        window.scroll(0, scrolledY - 72);
      }
    }
  }, [userFocus]);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div className={toolbar}>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <FlareIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, userFocus }) => {
      return (
        <MenuItem
          key={label}
          onClick={() => {
            setUserFocus(userFocus);
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
          }}
        >
          {label}
        </MenuItem>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, userFocus }) => {
      return (
        <Button
          {...{
            color: "inherit",
            className: menuButton,
            key: label,
          }}
          onClick={() => setUserFocus(userFocus)}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header id={"home"} ref={titleRef}>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

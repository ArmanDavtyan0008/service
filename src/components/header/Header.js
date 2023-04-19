import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  ThemeProvider,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { NavLink } from "react-router-dom";
import Auth from "../Auth";
import { navbar } from "../../constants/common";
import { stylesSx, theme } from "./mui-styles";

const Header = () => {
  const [activeLinkId, setActiveLinkId] = useState();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);

  const handleOpenLogin = () => {
    setLoginDialogOpen(true);
    setSignUpDialogOpen(false);
  };

  const handleOpenSignUp = () => {
    setSignUpDialogOpen(true);
    setLoginDialogOpen(false);
  };

  const onClose = () => {
    setSignUpDialogOpen(false);
    setLoginDialogOpen(false);
  };

  const checkIfActive = (id) => activeLinkId === id;

  const activateEl = (e) => setActiveLinkId(e.currentTarget.id);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "#192026" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={stylesSx}>
            <NavLink
              to="/"
              className="navbar-link"
              id="home"
              onClick={activateEl}
            >
              <Typography variant="h4" noWrap className="logo-text">
                <DirectionsCarIcon />
                Logo
              </Typography>
            </NavLink>
            <Box sx={{ display: "flex", gap: 6, alignItems: "center" }}>
              {navbar.map((nav) => (
                <NavLink to={`/${nav}`} className="navbar-link" key={nav}>
                  <Button
                    variant="navbar"
                    id={`/${nav}`}
                    onClick={activateEl}
                    className={`${
                      checkIfActive(`/${nav}`) ? "active-navbar-btn" : ""
                    }`}
                  >
                    <Typography variant="h5" noWrap>
                      {nav}
                    </Typography>
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Auth
              handleOpenLogin={handleOpenLogin}
              handleOpenSignUp={handleOpenSignUp}
              loginDialogOpen={loginDialogOpen}
              signUpDialogOpen={signUpDialogOpen}
              onClose={onClose}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;

import React from "react";
import Navigation from "./Navigation";
import { AppBar, Button, Toolbar, Container } from "@mui/material";
import { defaultTheme } from "../constants/mui-themes";
import { useAuth } from "../hooks/use-auth";
import User from "./UserMenu";

const Header = () => {
  const { isAuth } = useAuth();
  return (
    <AppBar position="static" sx={defaultTheme}>
      <Container>
        <Toolbar sx={{ flexGrow: 1 }}>
          <Navigation />
          {isAuth ? <User /> : <Button color="inherit">login</Button>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

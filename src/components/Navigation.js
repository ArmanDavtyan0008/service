import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { PAGES } from "../constants/common";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <IconButton>
        <Avatar
          alt="ICON"
          src="https://www.allwedlimos.com/wp-content/uploads/2018/04/all-wed-logo.png"
        />
      </IconButton>
      <Typography variant="h4" sx={{ cursor: "pointer" }}>
        <Link to="/">My Title</Link>
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {PAGES.map((page) => (
          <Button key={page} sx={{ ml: 3, color: "white", display: "block" }}>
            <Link to={page}>{page}</Link>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Navigation;

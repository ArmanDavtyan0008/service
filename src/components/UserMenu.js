import React, { useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { SETTINGS } from "../constants/common";

const User = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpenMenu = (e) => {
    setIsOpen(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setIsOpen(null);
  };

  return (
    <Box>
      <Tooltip>
        <IconButton onClick={handleOpenMenu}>
          <Avatar alt="avatar" src="#" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={isOpen}
        keepMounted
        id="menu-appbar"
        open={Boolean(isOpen)}
        onClose={handleCloseMenu}
        sx={{ mt: "45px" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {SETTINGS.map((sett) => (
          <MenuItem key={sett}>
            <Typography textAlign="center">{sett}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default User;

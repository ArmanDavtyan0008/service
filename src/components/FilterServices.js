import { MenuItem } from "@mui/material";
import React from "react";

const FilterServices = ({ setFilter }) => {
  return (
    <div style={{ width: "10%", marginTop: "15px" }}>
      <MenuItem value="all" onClick={() => setFilter("all")}>
        all
      </MenuItem>
      <MenuItem value="limousine" onClick={() => setFilter("limousine")}>
        Limousine
      </MenuItem>
      <MenuItem value="sedan" onClick={() => setFilter("sedan")}>
        Sedan
      </MenuItem>
      <MenuItem
        value="jeep"
        onClick={(e) => {
          setFilter("jeep");
        }}
      >
        Jeep
      </MenuItem>
    </div>
  );
};

export default FilterServices;

import React, { useEffect, useState } from "react";
import { carColl } from "../constants/common";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const ServicePage = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    setCar(carColl);
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ImageList cols={3} gap={100}>
        {car.map((data) => (
          <ImageListItem key={data.id} sx={{ width: 300 }}>
            <img src={data.img} />
            <ImageListItemBar
              title={
                <h1>
                  {data.brand} {data.name}
                </h1>
              }
              subtitle={
                <h3>
                  Color - {data.color} <br />
                  Year - {data.releaseYear}
                </h3>
              }
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ServicePage;

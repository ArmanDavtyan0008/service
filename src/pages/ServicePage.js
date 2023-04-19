import React, { useEffect, useState } from "react";
import { carColl } from "../constants/common";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import FilterServices from "../components/FilterServices";

const ServicePage = () => {
  const [car, setCar] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let typeCars = carColl.filter((car) => car.type === filter);
    setCar(typeCars);
    filter === "all" && setCar(carColl);
  }, [filter]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FilterServices setFilter={setFilter} />
      <ImageList cols={3} gap={100} sx={{ width: "90%" }}>
        {car.map((data) => (
          <ImageListItem key={data.id}>
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

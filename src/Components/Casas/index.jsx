import axios from "axios";
import React, { useState } from "react";
import {
  Title,
  Card,
  Image,
  Data,
  Box,
  Figure,
  Wrap,
  Name
} from "./CasasStyle.js";
import { Link } from "react-router-dom";

export default function Houses() {
  const [houses, setHouses] = useState([]);

  axios
    .get("https://legacy--api.herokuapp.com/api/v1/houses")
    .then((response) => {
      console.log(response.data);
      setHouses(response.data);
    });

  return (
    <Box>
      <Title>Casas de Hogwarts</Title>
      <nav>
        <ul>
          <Link style={{ textDecoration: "none", color: "#b0c4de" }} to="/Home">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
      <Wrap>
        {houses.map((item) => (
          <Card>
            <Figure>
              <Image src={item.image_url} alt={item.name} />
            </Figure>
            <>
              <Name>{item.name}</Name>
              <Data>Members: {item.members}</Data>
            </>
          </Card>
        ))}
      </Wrap>
    </Box>
  );
}

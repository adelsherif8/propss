import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Unknown",
  team = "Free Agent",
  jerseyNumber = "none",
  age = "0",
  image = "no image",
}) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: 300,
        backgroundColor: "#00008B",
      }}
    >
      <Card.Img style={{ width: 300, height: 300 }} variant="top" src={image} />
      <Card.Body>
        <Card.Title
          style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
        >
          {name}
        </Card.Title>
        <Card.Text style={{ color: "white" }}>Team: {team}</Card.Text>
        <Card.Text style={{ color: "white" }}>
          Jersey Number: {jerseyNumber}
        </Card.Text>
        <Card.Text style={{ color: "white" }}>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;

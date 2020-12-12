import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import { FaTemperatureHigh, FaSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const WeatherCard = () => {
  return (
    <Card
      className="card loading"
      onClick={() => {
        alert("Héhé, il n'y a rien de plus à afficher pour le moment ;)");
      }}
    >
      <li className="strong">00/00/2020</li>
      <li>
        <FaTemperatureHigh className="mr-1" fontSize="1.5em" />- °C
      </li>
      <li>
        <WiHumidity className="mr-1" fontSize="1.8em" />- %{" "}
      </li>
      <li>
        <FaSun fontSize="4em" />
      </li>
      <li> Loading ... </li>
    </Card>
  );
};

const Placeholder = () => {
  return (
    <div className="mt-3 mb-2">
      <h3>Loading ...</h3>
      <CardDeck>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </CardDeck>
    </div>
  );
};

export default Placeholder;

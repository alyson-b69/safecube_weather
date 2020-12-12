import React, { useEffect } from "react";
import { connect } from "react-redux";
import dates from "../library/dates";
import * as actions from "../actions";
import { CardDeck, Card } from "react-bootstrap";
import {
  FaTemperatureHigh,
  FaSnowflake,
  FaSun,
  FaCloudShowersHeavy,
  FaCloud,
} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import Placeholder from "./Placeholder";

const WeatherList = ({ weather, fetchInitialWeather }) => {
  const initialFetch = () => {
    fetchInitialWeather("69007");
    fetchInitialWeather("Lisboa");
    fetchInitialWeather("London");
    fetchInitialWeather("Berlin");
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const weatherList = weather.results;
  useEffect(() => {
    console.log("List change : ", weatherList);
  }, [weatherList]);

  return (
    <section className="weatherContainer">
      {weatherList.map((cityData, i) => {
        return (
          <div className="mt-3 mb-2" key={cityData.city.name + new Date()}>
            <h3>
              {weather.isLoading && i === 0
                ? "Loading ... "
                : cityData.city.name}
            </h3>
            <CardDeck>
              {weather.isLoading && i === 0 ? (
                <Placeholder />
              ) : (
                cityData.list
                  .filter((item) => item.dt_txt.split(" ")[1] === "12:00:00")
                  .map((item) => (
                    <Card
                      className="card"
                      key={cityData.city.name + item.dt}
                      onClick={() => {
                        alert(
                          "Héhé, il n'y a rien de plus à afficher pour le moment ;)"
                        );
                      }}
                    >
                      <li className="strong">
                        {dates.datify(item.dt_txt.split(" ")[0])}
                      </li>
                      <li>
                        <FaTemperatureHigh className="mr-1" fontSize="1.5em" />
                        {item.main.temp} °C
                      </li>
                      <li>
                        <WiHumidity className="mr-1" fontSize="1.8em" />
                        {item.main.humidity} %{" "}
                      </li>

                      <li>
                        {item.weather[0].main === "Clouds" ? (
                          <FaCloud fontSize="4em" />
                        ) : item.weather[0].main === "Rain" ? (
                          <FaCloudShowersHeavy fontSize="4em" />
                        ) : item.weather[0].main === "Snow" ? (
                          <FaSnowflake fontSize="4em" />
                        ) : (
                          <FaSun fontSize="4em" />
                        )}{" "}
                      </li>
                      <li>{item.weather[0].description} </li>
                    </Card>
                  ))
              )}
            </CardDeck>
          </div>
        );
      })}
    </section>
  );
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps, actions)(WeatherList);

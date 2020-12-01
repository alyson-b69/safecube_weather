import React, { useEffect } from "react";
import { connect } from "react-redux";
import dates from "../library/dates";
import * as actions from "../actions";
import { Container, CardDeck, Card } from "react-bootstrap";
import {
  FaTemperatureHigh,
  FaSnowflake,
  FaSun,
  FaCloudShowersHeavy,
  FaCloud,
} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const WeatherList = (props) => {
  useEffect(() => {
    props.fetchWeather("asuncion");
  }, []);

  return (
    <section className="weatherContainer">
      {props.weather.map((cityData) => {
        return (
          <Container className="mt-3 mb-2">
            <h3>{cityData.city.name}</h3>
            <CardDeck>
              {cityData.list
                .filter((item) => item.dt_txt.split(" ")[1] === "12:00:00")
                .map((item) => (
                  <Card
                    className="card"
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
                      {item.main.temp} °Cel
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
                ))}
            </CardDeck>
          </Container>
        );
      })}
    </section>
  );

  {
    /* <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Time</th>
          <th>Temperature (° Cel)</th>
          <th>Himidity (%)</th>
          <th>Pressure (hPa)</th>
          <th>Weather </th>
        </tr>
      </thead>
      <tbody>
        {props.weather.map((cityData) => {
          return (
            <tr key={cityData.city.name}>
              <td>{cityData.city.name}</td>
              <td>
                {cityData.list
                  .filter((item) => item.dt_txt.split(" ")[1] == "12:00:00")
                  .map((item) => (
                    <li>{item.dt_txt}</li>
                  ))}
              </td>
              <td>
                {cityData.list
                  .filter((item) => item.dt_txt.split(" ")[1] == "12:00:00")
                  .map((item) => (
                    <li>{item.main.temp} ° Cel</li>
                  ))}
              </td>
              <td>
                {cityData.list
                  .filter((item) => item.dt_txt.split(" ")[1] == "12:00:00")
                  .map((item) => (
                    <li>{item.main.humidity} % </li>
                  ))}
              </td>
              <td>
                {cityData.list
                  .filter((item) => item.dt_txt.split(" ")[1] == "12:00:00")
                  .map((item) => (
                    <li>{item.main.pressure} hPa </li>
                  ))}
              </td>
              <td>
                {cityData.list
                  .filter((item) => item.dt_txt.split(" ")[1] == "12:00:00")
                  .map((item) => (
                    <li>{item.weather[0].description} </li>
                  ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table> */
  }
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps, actions)(WeatherList);

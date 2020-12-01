import React from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import * as actions from "../actions";

const SearchBar = (props) => {
  const [inputCity, setInputCity] = React.useState("");

  const handleInputcityChange = (e) => {
    setInputCity(e.target.value);
  };

  const cityFormSubmit = (e) => {
    e.preventDefault();

    props.fetchWeather(inputCity);
    setInputCity("");
  };

  return (
    <Form onSubmit={cityFormSubmit}>
      <Form.Row className="align-items-center">
        <Col>
          <Form.Label htmlFor="inlineFormInputCity" srOnly>
            City
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInputCity"
            placeholder="Type any city to get a weather"
            onChange={handleInputcityChange}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default connect(null, actions)(SearchBar);

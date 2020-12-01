import React from "react";
import SearchBar from "./search_bar";
import WeatherList from "./weather_list";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <SearchBar />
        <WeatherList />
      </main>
      <footer>
        Made with <span>❤️</span> by Alyson B.
      </footer>
    </div>
  );
};

export default App;

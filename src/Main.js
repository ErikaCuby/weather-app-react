import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className="current-weather">
        <div className="city-info">
          <h1>Paris</h1>
          <p>
            Saturday 15:32, moderate rain <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </p>
        </div>
        <div className="city-temperature">
          <span className="weather-emoji">☀️</span>
          <span className="temperature-value"> 24</span>
          <span className="celsius">°C</span>
        </div>
      </div>
      <hr />
    </main>
  );
}

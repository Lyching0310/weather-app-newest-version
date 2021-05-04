import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <div class="row">
          <div className="city-date">
            <div class="col-6" id="cityName">
              <h1>London</h1>
            </div>
            <div class="col-6">
              <h2 id="day">Friday</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="wind-condition-time" id="typeOfCondition">
            <div class="col-sm-12">
              <h3 id="timeDisplay">15:00</h3>
            </div>
            <div class="col-sm-12">
              <span className="condition" id="humid">
                {" "}
                Humidity: 1%
              </span>
            </div>
            <div class="col-12">
              <span className="condition" id="wind">
                {" "}
                Wind: 6 mph
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="center page">
        <img id="icon" className="iconElement" src="" />
        <p id="weatherType"></p>
        <p id="temperature">
          <span id="numericalTemp"></span>
          <span className="degrees" id="celsius">
            19°C{" "}
          </span>
        </p>
      </section>

      <div className="search-section">
        <form class="row g-2 justify-content-center" id="search-form">
          <div class="col-md-7">
            <input
              type="text"
              class="form-control"
              id="search-bar"
              placeholder="Enter a city"
              autocomplete="off"
            />
          </div>
          <div class="col-md-2 justify-content-center">
            <button
              type="submit"
              class="btn btn-primary mb-3"
              id="discover-button"
            >
              Search
            </button>
          </div>
          <div class="col-md-2 justify-content-center">
            <button type="submit" class="btn btn-success mb-3" id="now-button">
              Current
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

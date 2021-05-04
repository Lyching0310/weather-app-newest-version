import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div id="weather" className="weather-container">
        <br />
        <div id="footer">
          Created by Alyssa Reyes {""}
          <a
            href="https://github.com/Lyching0310/React-Weather-App"
            target="_blank"
            rel="noreferrer"
            id="gitLink"
          >
            Open-source code
          </a>
          {""} and {""}
          <a
            href="https://alyssareactweatherapp.netlify.app/"
            target="_blank"
            rel="noreferrer"
            id="Netlify"
          >
            Hosted on Netlify
          </a>
        </div>
      </div>
    </div>
  );
}

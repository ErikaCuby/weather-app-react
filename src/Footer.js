import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by{" "}
        <a href="https://github.com/ErikaCuby" target="_blank" rel="noreferrer">
          Erika Cuby
        </a>{" "}
        and is
        <a
          href="https://github.com/ErikaCuby/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        and{" "}
        <a href="/" target="_blank" rel="noreferrer">
          hosted on Netlify
        </a>
      </p>
    </footer>
  );
}

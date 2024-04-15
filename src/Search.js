import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <header>
      <form>
        <span className="enter-a-city">
          <input type="search" placeholder="Enter a city.." required />
        </span>
        <span className="search">
          <input type="submit" value="Search" />
        </span>
      </form>
      <hr />
    </header>
  );
}

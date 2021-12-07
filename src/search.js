import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import restaurantinfo from "./RestaurantList";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter restaurant name..." data={restaurantinfo} />
    </div>
  );
}

export default App;

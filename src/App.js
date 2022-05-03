import React, { useState } from 'react'
const api = {
  key: "28d1254b7f1728388ba870c92897af29",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          >
          </input>
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            15&deg;c
          </div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;

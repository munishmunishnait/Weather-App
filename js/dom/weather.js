/*
HTML Structure 

<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">CITY_NAME_HERE, COUNTRY_CODE_HERE</h5>
    <h6 class="card-subtitle mb-2 text-muted">CURRENT_WEATHER_DEGREES_HERE</h6>
    <p class="card-text">WEATHER_DESCRIPTION_HERE</p>
  </div>
</div>

*/

// renderWeather function

const renderWeather = (weather, renderItems) => {
  var weatherDescription = weather.weather[0]
  renderItems.innerHTML += 
  `<div class="mt-2 card" >
      <div class="card-body">
        <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${(weather.main.temp-273.15).toFixed(2)} °C</h6>
        <p class="card-text">${weatherDescription.description}</p>
      </div>
  </div>`
}

// export the renderWeather function
export { renderWeather }
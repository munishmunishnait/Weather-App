// replace your api key 
// create getWeather function here

const getWeather = (city) => {
    const API_KEY = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=38323b43470d1808c5e08a53ad54a09e"
        return fetch(`${API_KEY}`)
            .then((response) => {
            return response.json()
        }).then((weatherData) => {
            return weatherData
        })
}

export { getWeather }

// export the getWeather function
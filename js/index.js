// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.

import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeather } from './api/base';
import { renderWeather } from './dom/weather';

let weatherContainer = document.querySelector(".weather-container")

let form = document.getElementById('weather-search')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let itemsearch = event.target.elements["city-name"]
    getWeather(itemsearch.value).then((cityWeather) => {
    renderWeather(cityWeather, weatherContainer)
    })
    if(itemsearch.value != ""){
        itemsearch.value = "";
    }
})
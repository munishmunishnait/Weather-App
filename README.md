# Weather-App

Current Weather Display App

This repository contains the code for the "Current Weather Display App". The assignment focuses on using JavaScript, NPM, Node.js, and the OpenWeatherMap API to display the current weather for a given city. Below is an overview of the project and its key tasks.

Overview

The "Current Weather Display App" is designed to fetch and display the current weather for a specified city using the OpenWeatherMap API. Users can enter a city, click the "Search" button, and see the weather information on the page.

Key Tasks

NPM and Packages:

1. Install the required packages (bootstrap and parcel) using NPM.
2. Set up scripts in the package.json file.
3. Ensure proper script configuration and correct dependency management.
   
Fetch Weather Data:

1. Create a function named "getWeather" that takes a city name as a parameter and returns data from the OpenWeatherMap API.
2. The function should return data as a promise and be placed in the "api/base.js" file.
3. Export the function for use in other files.

Render Weather Data:

1. Create a function named "renderWeather" in the "dom/weather.js" file.
2. This function uses the DOM API to update the content of the "weather-container" element.
3. It takes weather data and the target element as arguments.
4. Uses template strings to dynamically display weather information on the page.

Integration:

1. Import the "getWeather" and "renderWeather" functions into the "index.js" file.
2. Set up event handling for the form submission.

Form Submission:

1. Intercept and prevent the form from being submitted using an event listener.
2. Call the "getWeather" function with the user-entered city.
3. Display the weather information on the page using the "renderWeather" function.

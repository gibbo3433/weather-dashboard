var searchButton = document.getElementById("search-button");
var searchText = document.getElementById("search-text");

// An empty array which will be filled by the users cities input
var searchHistory = [];

// chosenlocation becomes what the user entered into the search text input
var chosenLocation = searchText.value;

// This fucntion adds the users choice of location to the console.log
function searchweatherlocation() {
  var chosenLocation = searchText.value;
  // If the user enters no text into the input, a windows error will be displayed
  if (chosenLocation === "") {
    window.alert("Error, please enter a valid location");
    return;
    // If the user enters a valid location, then the findchosenlocation function will begin
  } else {
    // checking whether the chosen location path is correct
    console.log(chosenLocation);

    searchHistory.push(chosenLocation);
    localStorage.setItem("search-history", JSON.stringify(searchHistory));

    createSearchHistoryDiv();

    findchosenlocation(chosenLocation);
  }
}

function startSearchHistory() {
  // this will fill the specific search history div if there are any in the local storage

  if (localStorage.getItem("search-history")) {
    searchHistory = JSON.parse(localStorage.getItem("search-history"));
    // will let me see what is inside my search history
    console.log(searchHistory);
    // this will render the search histories contents into a new divs in a new function
    createSearchHistoryDiv();
  } else {
    document.getElementById("recent-location").textContent = "-";
  }
}

function createSearchHistoryDiv() {
  var recentLocationDiv = document.getElementById("recent-location");

  // Sets the div to blank, ready to be updated with the local storage
  recentLocationDiv.innerHTML = "";

  // For loop creates a new div for each city searched for in the local storage
  for (i = 0; i < searchHistory.length; i++) {
    var recentCity = document.createElement("div");
    recentCity.classList.add("added-locations");
    recentCity.textContent = searchHistory[i];
    recentCity.addEventListener("click", onClickRecentLocation);

    recentLocationDiv.appendChild(recentCity);
  }
}

// This will run if the user clicks on a city located in the recent locations div and will run that city back through the weather search
function onClickRecentLocation(event) {
  var recentCityChosen = event.target.textContent;
  findchosenlocation(recentCityChosen);
}

// Finds the chosen location from the API
function findchosenlocation(input) {
  // This will add my users chosenlocation in to the API search and add my API key so that it allows me the chosen data
  var findChosenWeather = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=metric`;

  // fetch the data from the api, related to what the user inputed
  fetch(findChosenWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Show the data found in the console, only the first string in the array
      console.log(data[0]);

      // creates a var which holds the data for the chosen city the user has selected
      var foundChosenWeather = data[0];
      // checking that the correct path has been taken - shows in the log the correct results
      console.log(foundChosenWeather);

      // This will start up the chosen location function
      displaychosenlocation(data[0]);
    });
}

// function for inputting the data into a div to show the name of the place chosen and its country
function displaychosenlocation(weatherData) {
  // edits the textcontent to show the chosen city and its country
  document.getElementById(
    "weather-name"
  ).textContent = `${weatherData.name}, ${weatherData.country}`;

  // starts a new function to show more weather data from the API
  findLocationWeather(weatherData.lat, weatherData.lon);
}

function findLocationWeather(lat, lon) {
  // This will find the weather associated with the latitude and longitude of the country chosen by the user
  var findLocationWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=metric`;
  console.log(findLocationWeather);

  // Get the weather date from the api, through json, into data we can use and display
  fetch(findLocationWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherData) {
      // Shows me the weather data of the chosen city in the console log
      console.log(weatherData);

      createCurrentWeather(weatherData);
      createForecastWeather(weatherData);
    });
}

// This function will create 5 future forecast weathers for the chosen city
function createForecastWeather(forecastData) {
  // Clear the id=forecast in the index page
  var forecastHtml = document.getElementById("forecast-area");
  forecastHtml.innerHTML = "";

  // Creates the 5 new divs for the forecast, makes sure to get every 8th array as this is when the API gives me a new day
  for (var i = 0; i < 40; i += 8) {
    var todayForcast = forecastData.list[i];

    // These var allow me to choose what to take from the API what I need about the weather
    var todayDate = new Date(todayForcast.dt * 1000).toLocaleDateString(
      "en-GB"
    );
    var todayTemp = "Temperature: " + `${todayForcast.main.temp}` + "°c 🌡";
    var todayWind = "Wind Speed: " + `${todayForcast.wind.speed}` + " mph";
    var todayHumid = "Humidity: " + `${todayForcast.main.humidity}` + " %";
    var todayIcon = `${todayForcast.weather[0].icon}`;

    // create a new div and add in all of the shown classes with the newly created var
    var todayDiv = document.createElement("div");
    todayDiv.classList.add("forecast-days");
    todayDiv.innerHTML = `<div class="forecast-future">
    <div class="5date">
        <div>${todayDate}</div>
    </div>
    <div class="5icon">
        <img src="https://openweathermap.org/img/wn/${todayIcon}@2x.png"/>
    </div>
    <div class="5temp">
        <div>${todayTemp}</div>
    </div>
    <div class="5humid">
        <span>${todayHumid}</span>
    </div>
    <div class="5wind">
        <span>${todayWind}</span>
    </div>
     </div>`;

    // add the newly created div to the id=forecast-area div
    forecastHtml.appendChild(todayDiv);
  }
}

// This will add the weather data into specific ids on the index.html file
function createCurrentWeather(todayData) {
  console.log(todayData);

  var dateToday = new Date().toDateString(todayData.list[0].dt * 1000);

  // here, the ids selected are being given new text in relation to what is being taken from the API and shown in the HTML
  document.getElementById("date").textContent = `${dateToday}`;
  document.getElementById("temp").textContent =
    " Temperature: " + `${todayData.list[0].main.temp}` + " °C 🌡";
  document.getElementById("wind").textContent =
    " Wind Speed: " + `${todayData.list[0].wind.speed}` + " mph ";
  document.getElementById("humid").textContent =
    " Humidity: " + `${todayData.list[0].main.humidity}` + " % ";
  document.getElementById(
    "icon-img"
  ).src = `http://openweathermap.org/img/wn/${todayData.list[0].weather[0].icon}@2x.png`;
}

startSearchHistory();

searchButton.addEventListener("click", searchweatherlocation);

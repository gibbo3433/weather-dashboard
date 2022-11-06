
var searchButton = document.getElementById('search-button');
var searchText = document.getElementById('search-text');

// chosenlocation becomes what the user entered into the search text input
var chosenLocation = searchText.value;

// This fucntion adds the users choice of location to the console.log
function searchweatherlocation() {
    var chosenLocation = searchText.value;
    // If the user enters no text into the input, a windows error will be displayed
    if (chosenLocation === '') {
    window.alert('Error, please enter a valid location')
    return;
    // If the user enters a valid location, then the findchosenlocation function will begin
    } else {
    // checking whether the chosen location path is correct
    console.log(chosenLocation);
    findchosenlocation(chosenLocation);
}};
 
// Finds the chosen location from the API
function findchosenlocation (input) {

    // This will add my users chosenlocation in to the API search and add my API key so that it allows me the chosen data
    var findChosenWeather = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=d91f911bcf2c0f925fb6535547a5ddc9`;

    // fetch the data from the api, related to what the user inputed
    fetch (findChosenWeather)

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

        displaychosenlocation(data[0]);  
      })

}

// function for inputting the data into a div to show the name of the place chosen and its country
function displaychosenlocation (weatherData) {

    // edits the textcontent to show the chosen city and its country
     document.getElementById('weather-name').textContent = `${weatherData.name}, ${weatherData.country}`;

     // starts a new function to show more weather data from the API
     findLocationWeather (weatherData.lat, weatherData.lon);
}

function findLocationWeather (lat, lon) {

    // This will find the weather associated with the latitude and longitude of the country chosen by the user
    var findLocationWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=d91f911bcf2c0f925fb6535547a5ddc9`;

    // Get the weather date from the api, through json, into data we can use and display
    fetch (findLocationWeather)

     .then(function (response) {
        return response.json();
      })
      .then(function (weatherData) {

       // Shows me the weather data of the chosen city in the console log
       console.log(weatherData)
       
       createCurrentWeather(weatherData);

      });

    

   // create5DaysWeather(weatherData);
    
}
// This will add the weather data into specific ids on the index.html file
function createCurrentWeather (todayData) {

  // This will transder the todayData.curretn from the gathered API into a new createWeather var
  var createWeather = todayData.current;  
     
  // here, the ids selected are being given new text in relation to what is being taken from the API and shown in the HTML
 document.getElementById("temp").textContent = " Temperature = " + `${createWeather.temp}` + " °F 🌡";
 document.getElementById('wind').textContent = " Wind Speed = " + `${createWeather.wind_speed}` + " mph ";
 document.getElementById('humid').textContent = " Humidity = " + `${createWeather.humidity}` + " % ";
 document.getElementById('UVI').textContent = " UVI Level = " + `${createWeather.uvi}` + " UV ";
 document.getElementById('icon').textContent = `${createWeather.weather[0].child[0]}`
 
}




//function create5DaysWeather () {}







 // Heres needs to be the addd to the recent location area

 



searchButton.addEventListener("click", searchweatherlocation);



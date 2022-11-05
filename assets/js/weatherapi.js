
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
}}


  
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

        displaychosenweather(data[0]);  
      })

    }

// function for inputting the data into a div to show the name of the place chosen and its country
function displaychosenweather (weatherData) {

     document.getElementById('weather-name').textContent = `${weatherData.name}, ${weatherData.country}`;


}







 // Heres needs to be the addd to the recent location area

 



searchButton.addEventListener("click", searchweatherlocation);

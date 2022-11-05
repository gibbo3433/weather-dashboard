
var searchbutton = document.getElementById('search-button');
var searchtext = document.getElementById('search-text');

// chosenlocation becomes what the user entered into the search text input
var chosenlocation = searchtext.value;

// This fucntion adds the users choice of location to the console.log
function searchweatherlocation() {

var chosenlocation = searchtext.value;
console.log(searchtext.value)

// If the user enters no text into the input, a windows error will be displayed
if (chosenlocation === '') {
    window.alert('Error, please enter a valid location')
    return;
// If the user enters a valid location, then the findchosenlocation function will begin
} else {
    console.log(chosenlocation)
    findchosenlocation(chosenlocation)
}}


  
// Finds the chosen location from the API
function findchosenlocation (input) {

    // This will add my users chosenlocation in to the API search and add my API key so that it allows me the chosen data
    var findchosenweather = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=d91f911bcf2c0f925fb6535547a5ddc9`;

    // fetch the data from the api, related to what the user inputed
    fetch (findchosenweather)

    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Show the data found in the console
        console.log(data);
      });
    }

 



searchbutton.addEventListener("click", searchweatherlocation);

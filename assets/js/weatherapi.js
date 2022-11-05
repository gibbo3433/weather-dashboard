var searchbutton = document.getElementById('search-button');
var searchtext = document.getElementById('search-text')


// This fucntion adds the users choice of location to the console.log
function searchweatherlocation() {

var chosenlocation = searchtext.value;
console.log(searchtext.value)

// If the user enters no text into the input, a windows error will be displayed
if (chosenlocation === '') {
    window.alert('Error, please enter a valid location')
// If the user enters a valid location, then the findchosenlocation function will begin
} else {
    findchosenlocation(chosenlocation)
}}

// Finds the chosen location ......
function findchosenlocation







searchbutton.addEventListener("click", searchweatherlocation);



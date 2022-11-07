# Week-6-Weather-Dashboard

# Challenge 6: 

## Creating a weather dashboard

### User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

### Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Issues identified and corrected

- Adding to the local memory and then making sure it was saved for future uses

I needed to work on making sure I located the data I needed to save to local memoruy and then make sure I reloaded it into
the recent locations div once it reopened again and wasn't lost.

- Making the forecast date correct with each day

////////////////////

- Adding in data from the API 

I was confused at first at how to add in data from the API but after researching and with the use of console.log() too see
where I was, I was able to use `${}` to add in the data I wanted into the correct places/create variables which included the data I needed.

## Future work

- Change colour and fonts  
- Test if BootstrapAPI would be more suited to the styling
- More inforamtion given to user about entering wrong cities into the input field

I have added HTML alt: notes, CSS /*notes*/ and Javascript //notes to help any future edits by making it easier to see what the different elements are in the code and if any collaboration work will be done in the future. 

## Screenshot of completed webpage + Inspect

////////////////////////////////////////////////////////////////////////////////////////

## Link to deployed application

////////////////////////////////////////////////////////////////////////////////////////

## Authors and acknowledgment

Jordan Gibbs - Novice Coder

## License
N/A

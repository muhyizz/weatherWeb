import { buildPage } from "./page_load";

buildPage();

var API_KEY;
var location;

document.addEventListener("DOMContentLoaded", () => {
  const submitDetails = document.getElementById("submitButton");
  submitDetails.addEventListener("click", (event) => {
    var api_key = document.getElementById("apiKeyInput");
    API_KEY = api_key.value;
    var location_input = document.getElementById("locationKeyInput");
    location = location_input.value;
    API_KEY = "1855165193b84be8b82175711242205";
    location = "london";
    importData(API_KEY, location);
  });
});

async function importData(API_KEY, location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&days=3`,
      {
        mode: "cors",
      }
    );
    const calledOut = await response.json();
    console.log(calledOut);
    if (!response.ok) {
      console.log(
        `Error Fetching Data ${response.statusText} code ${response.status}`
      );
    }
    display(calledOut);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

function display(calledOut) {
  let locationText = document.getElementById("weatherLocation");
  let locationImage = document.getElementById("weatherIcon");
  const iconUrl = calledOut.current.condition.icon;

  locationText.innerText = calledOut.location.country;
  locationImage.style.backgroundImage = `url(${iconUrl})`;
}

//1855165193b84be8b82175711242205

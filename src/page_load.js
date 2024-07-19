import "./style.css";

export const buildPage = () => {
  const container = document.getElementById("main-body");

  if (!container) {
    console.error("Element with ID 'main-body' not found."); // Error handling
    return; // Exit if container not found
  }
  gridBody();
};

const gridBody = () => {
  const container = document.getElementById("main-body");
  const gridBody = document.createElement("div");
  gridBody.setAttribute("id", "gridBody");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  header.textContent = "header";

  const weatherToday = document.createElement("div");
  weatherToday.setAttribute("id", "today");
  weatherToday.textContent = "today";

  const weatherTomorrow = document.createElement("div");
  weatherTomorrow.setAttribute("id", "tmrw");
  weatherTomorrow.textContent = "tmrw";

  const weatherDayAfter = document.createElement("div");
  weatherDayAfter.setAttribute("id", "dayAfter");
  weatherDayAfter.textContent = "dy after";

  container.appendChild(gridBody);
};

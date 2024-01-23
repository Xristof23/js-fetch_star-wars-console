console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.results[2]);
  console.log("rsds2s eye color: " + data.results[2].eye_color);
}

fetchData();

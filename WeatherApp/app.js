const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "38ca2d61803ee9a967f0d08572f9ecc4";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const WeatherData = await getWeatherData(city);
      displayWeatherInfo(WeatherData);
    } catch (error) {
      console.log(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Please enter a valid country");
  }
  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const WeatherIMG = document.createElement("img");

  cityDisplay.textContent = city;
  tempDisplay.textContent = Math.round(temp) + " °C";
  humidityDisplay.textContent = humidity;
  descDisplay.textContent = description;

  switch (true) {
    case id >= 200 && id < 300:
      WeatherIMG.src = "/assets/snow.png";
      break;
    case id >= 300 && id < 400:
      WeatherIMG.src = "/assets/rain.png";
      break;
    case id >= 400 && id < 500:
      WeatherIMG.src = "/assets/rain.png";
      break;
    case id >= 500 && id < 600:
      WeatherIMG.src = "/assets/rain.png";
      break;
    case id >= 700 && id < 800:
      WeatherIMG.src = "/assets/mist.png";
      break;
    case id === 800:
      WeatherIMG.src = "/assets/clear.png";
      break;
    case id >= 801 && id < 810:
      WeatherIMG.src = "/assets/cloud.png";
      break;
    default:
        return "";
  }

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  WeatherIMG.classList.add("weatherImg");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(WeatherIMG);
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.appendChild(errorDisplay);
  card.style.display = "flex";
}

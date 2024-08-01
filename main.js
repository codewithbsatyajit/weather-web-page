const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "868e7a263c0066b3e6c34ad7a443c3b2";
  const city = document.querySelector(".search-box input").value;
  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        error404.classList.add("active");
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        return;
      }

      error404.classList.remove("active");
      weatherBox.style.display = "";
      weatherDetails.style.display = "";

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "clear.png";
          break;
        case "Rain":
          image.src = "rain.png";
          break;
        case "Snow":
          image.src = "snow.png";
          break;
        case "Clouds":
          image.src = "cloud.png";
          break;
        case "Mist":
        case "Haze":
          image.src = "mist.png";
          break;
        default:
          image.src = "cloud.png";
      }

      temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${Math.round(json.wind.speed)}Km/h`;
    })
    .catch((error) => {
      alert(error.message);
    });
});

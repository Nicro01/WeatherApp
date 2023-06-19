document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "709854035951160994921bbf2abd5c02";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var cards = document.getElementsByClassName("card");
  const ul = document.querySelector("#ul-cards");

  function fetchWeatherData(card, city) {
    const temp = card.querySelector("#temp");
    const localizacao = card.querySelector("#location");
    const spanTempo = card.querySelector("#temp_icon");

    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`City: ${city}`);
        console.log("Weather data:", data);
        const temperature = data.main.temp;
        const local = data.name;
        const wsp = data.wind.speed;
        const wdc = data.wind.deg;

        temp.textContent = "Temp: " + temperature + "°C";
        localizacao.textContent = local + " 📍";

        const weatherConditions = data.weather[0].main;

        if (weatherConditions === "Rain") {
          spanTempo.textContent = "🌧";
        } else if (weatherConditions === "Clouds") {
          spanTempo.textContent = "☁️";
        } else if (weatherConditions === "Snow") {
          spanTempo.textContent = "❄️";
        } else {
          const currentTime = new Date();
          const sunsetTime = new Date(data.sys.sunset * 1000);

          if (currentTime > sunsetTime) {
            spanTempo.textContent = "🌒";
          } else {
            spanTempo.textContent = "☀";
          }
        }
      })
      .catch((error) => {
        console.log("Error fetching weather data:", error);
        card.parentElement.remove();
        if (cards.length <= 0) {
          ul.style.display = "none";
        } else {
          ul.style.display = "flex";
        }
      });
  }

  if (cards.length <= 0) {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var city = card.getAttribute("data-city");

    fetchWeatherData(card, city);
    card.addEventListener("click", toggleFullScreen.bind(null, card));
  }

  function toggleFullScreen(card) {
    card.classList.toggle("fullscreen");
  }

  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementsByClassName("close")[0];
  const addCardForm = document.getElementById("addCardForm");

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  openModalBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  function deleteCard(card) {
    card.parentElement.remove();

    var cards = document.getElementsByClassName("card");
    const ul = document.querySelector("#ul-cards");
    if (cards.length <= 0) {
      ul.style.display = "none";
    } else {
      ul.style.display = "flex";
    }
  }

  addCardForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value;

    const ul = document.querySelector("#ul-cards");

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("objeto", "card");
    div.setAttribute("data-city", city);

    const nestedDiv = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.classList.add("localizacao");
    h1.setAttribute("id", "location");
    h1.textContent = "LOCATION 📍";

    const spanTemp = document.createElement("span");
    spanTemp.setAttribute("id", "temp");
    spanTemp.textContent = "Temp:";

    nestedDiv.style.maxWidth = "110px";

    if (nestedDiv.style.width < "110px") {
      nestedDiv.style.minWidth = "110px";
    }

    nestedDiv.appendChild(h1);
    nestedDiv.appendChild(spanTemp);

    const spanTempo = document.createElement("span");
    spanTempo.classList.add("tempo");
    spanTempo.setAttribute("id", "temp_icon");
    spanTempo.textContent = "☀";

    spanTempo.style.maxWidth = "90px";
    spanTempo.style.minWidth = "90px";

    if (spanTempo.style.width < "90px") {
      spanTempo.style.display = "flex";
      spanTempo.style.justifyContent = "center";
    }

    div.appendChild(nestedDiv);
    div.appendChild(spanTempo);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "🗑";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.fontWeight = "bold";
    deleteButton.addEventListener("click", function () {
      deleteCard(div);
    });
    div.appendChild(deleteButton);

    li.appendChild(div);

    ul.appendChild(li);

    fetchWeatherData(div, city);

    div.addEventListener("click", function () {
      toggleFullScreen(div);
    });

    cityInput.value = "";

    var cards = document.getElementsByClassName("card");
    if (cards.length <= 0) {
      ul.style.display = "none";
    } else {
      ul.style.display = "flex";
    }

    closeModal();
  });
});

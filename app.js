//DOM
const input = document.querySelector("input")
const buttonShow = document.querySelector("button")
const cityName = document.querySelector(".w-card h3");
const tempH1 = document.querySelector(".temp h1")
const img = document.querySelector("img")
const p = document.querySelectorAll(".w-card p")
const p1 = p[0]
const p2 = p[1]
const p3 = p[2]

const translations = {
    "Rain": "Дождь",
    "Clouds": "Облачно",
    "Snow": "Снег",
    "Smoke": "Туман",
    "Clear": "Ясно",
    "Wind": "Ветер",
    "Humidity": "Влажность",
    "Mist" : "Туман"
};

// REST API
const apiKey = "&appid=6511e14723ad8cb6f243ece1366c5deb"
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q="

function fetchWeather(city_name = "Moscow") {
    fetch(baseURL + city_name + apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data, '---data---');
            const { name, sys, main, weather, wind, } = data
            cityName.innerHTML = `${name} <span>${sys.country}</span>`;
            tempH1.innerHTML = `${Math.round(main.temp - 273.15)} <span>°c</span>`
            p1.innerHTML = `${translations[weather[0].main]}`
            p2.innerHTML = `<p>Ветер ${wind.speed}   <span>км/ч</span></p>`
            p3.innerHTML = `<p>Влажность ${main.humidity}  <span>%</span></p>`
            img.src = setImg(weather[0].main)



        })
        .catch()
}
fetchWeather()


buttonShow.onclick = () => {
    const userInput = input.value.trim().split(',');
    const city = userInput[0];
    const country = userInput.length > 1 ? userInput[1] : "";
    fetchWeather(city, country);
};

function setImg(text) {
    switch (text) {
        case "Rain":
            return "./images/rain2.png"
        case "Clouds":
            return "./images/mist.png"
        case "Sun":
            return "./images/sunny.png" 
        case  "Snow":
            return "./images/snow.png" 
        case "Smoke" :
            return "./images/sun.png"
        case "Clear" :
            return "./images/sunny.png"  
        case "Mist" :
            return "./images/mist.png"          

    }

}
//поиск
//картинки погоды
// перевод 
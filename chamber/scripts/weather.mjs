// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const hight = document.querySelector('#hight');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-8.06&lon=-34.88&cnt=3&appid=621cfebbcb8a53925065acc9b3391484&units=imperial";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast/?lat=-8.06&lon=-34.88&cnt=12&appid=621cfebbcb8a53925065acc9b3391484&units=imperial"

export async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json(); 
        displayResults(data)

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', iconsrc);
    weatherIcon.setAttribute('width', '150px');
    captionDesc.textContent = `${desc}`;
    hight.innerHTML= `Height: ${data.main.temp_max} &deg;F`;
    low.innerHTML= `Low: ${data.main.temp_min} &deg;F`;
    humidity.innerHTML= `Humidity: ${data.main.humidity} %`;
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    sunrise.innerHTML= `Sunrise: ${sunriseTime}`;
    sunset.innerHTML= `Sunset: ${sunsetTime} `;
  }

export async function forecast(){
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayforecast(data)
        } else {
            throw Error(await response.text());
        }     
    } catch (error) {
        console.log(error);
    }
}

function displayforecast(data) {
    const today = document.getElementById('today');
    const d2 = document.getElementById('d2');
    const d3 = document.getElementById('d3');
    const d2s = new Date(data.list[1].dt_txt);
    const d3s = new Date(data.list[11].dt_txt);

    const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thurday', 'friday', 'saturday']
    const d2ofweek = week[d2s.getDay()];
    const d3ofweek = week[d3s.getDay()];
    today.innerHTML= `Today: <strong>${data.list[0].main.temp} &deg;F </strong>`
    d2.innerHTML= `${d2ofweek}: <strong>${data.list[1].main.temp} &deg;F </strong>`
    d3.innerHTML= `${d3ofweek}: <strong>${data.list[11].main.temp} &deg;F </strong>`

}
  
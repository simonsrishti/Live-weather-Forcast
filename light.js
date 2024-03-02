const celcius = document.querySelector('.celcius')
const cityName = document.querySelector('.city-name');
const weatherIcon = document.querySelector('.weather-icon');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherImage = document.getElementById('weather-image')

const searchBtn = document.getElementById('serach-btn');



async function displayData(cityname) {
  const promise = await fetch((`http://api.weatherapi.com/v1/current.json?key=903fbc59059c48dcb6735832242502&q=${cityname}&aqi=yes`));
  return await promise.json()
}


 

searchBtn.addEventListener('click', async() => {
  const userInput = document.querySelector('.user-input').value;
let result = await displayData(userInput)
celcius.innerHTML = `${result.current.condition.text} ${result.current.temp_c}°C`
cityName.innerHTML = `City: ${result.location.name}<br> Country: ${result.location.country}`
humidity.innerHTML = `Humidity: ${result.current.humidity}`
wind.innerHTML = `Wind Mph: ${result.current.wind_mph}`

if(result.current.condition.text === 'Partly cloudy'){
  weatherImage.src = 'images/clouds.png'
}
else if(result.current.condition.text === 'clear'){
  weatherImage.src = 'images/clear.png'
}
else if(result.current.condition.text === 'Rain'){
  weatherImage.src = 'images/rain.png'
}
else if(result.current.condition.text === 'Light Rain shower '){
  weatherImage.src = 'images/rain_light.png'
}

else if(result.current.condition.text === 'Snow'){
  weatherImage.src = 'images/snow.png'
}
else if(result.current.condition.text === 'Mist'){
  weatherImage.src = 'images/mist.png'
}

})
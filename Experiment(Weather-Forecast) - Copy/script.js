// all declared variables
const apiKey = 'b21c3c3b84aafa7ffc416187edd65fb4';
let cityName = 'silchar'; // Set a default city
const searchbox = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const weathericon = document.querySelector('.weather-image')

// async function for city parameter
async function fetchData(city) {
    try {
        // api url
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        //fetching api url
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (data.cod != 200) {
            throw new Error(data.message);
        }

        
        // selection of selectors by query selector
        document.querySelector('#place').textContent = data.name;
        const temperatureCelsius = (data.main.temp - 273).toFixed(0);
        document.querySelector('#maintem').textContent = `${temperatureCelsius}°C`;
        // const pressure = (data.main.pressure / 1013.25).toFixed(2);
        document.querySelector('.pressure').textContent = `${data.main.pressure} hPa`;
        document.querySelector('.windspeed').textContent = `${data.wind.speed} m/s`;
        document.querySelector('.humid').textContent = `${data.main.humidity} %`;
        document.querySelector('#weather').textContent = data.weather[0].main

        // if else condition for changing images according to weather condition
        if (data.weather[0].main == 'Clouds') {
            weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/clouds.png'
        }else  if (data.weather[0].main == 'Clear') {
            weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/clear.png'
        }else  if (data.weather[0].main == 'Rain') {
            weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/rain.png'
        }else if (data.weather[0].main == 'Drizzle') {
            weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/drizzle.png'
        }else  if (data.weather[0].main == 'Mist') {
            weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/mist.png'
        }else  if (data.weather[0].main == 'Snow') {
            weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/snow.png'
        }


         // Update live time
         updateLiveTime(data.timezone);
       
        // if error show error
    } catch (error) {
        console.log(error);

           // Show alert for city not found or other errors
           if (error.message === 'City not found') {
            alert('City not found. Please enter a valid city name.');
        } else {
            alert('City not found. Please enter a valid city name.');
        }
    }
}







function updateLiveTime(timezone) {
    const timestampOffset = timezone;
    const timestamp = Math.floor(Date.now() / 1000) + timestampOffset;
    const date = new Date(timestamp * 1000);

    const localDateTime = date.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        timeZone: 'UTC'
    });

    document.getElementById('liveTime').textContent = localDateTime;
}

// Fetch data for the default city when the page loads
fetchData(cityName);

// for fetching data when pressing enter
searchbox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const newCity = searchbox.value.trim();
        if (newCity !== '') {
            cityName = newCity;
            fetchData(cityName);
        } else {
            alert('Please enter a city name.');
        }
    }
});

// for fetching data when pressing search
searchBtn.addEventListener('click', () => {
   
        const newCity = searchbox.value.trim();
        

            fetchData(newCity);
      
    }
);

// Update the live time every minute
setInterval(() => {
    fetchData(cityName);
}, 60000);






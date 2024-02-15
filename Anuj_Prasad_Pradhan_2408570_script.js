
// all declared variables

const apiKey = 'b21c3c3b84aafa7ffc416187edd65fb4';
// let cityName = 'silchar'; // Set a default city

//insert data called 
insertphp('silchar');


//query selections
const searchbox = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const weathericon = document.querySelector('.weather-image')
const sevencontainer = document.querySelector('.sevencontainer');

// for fetching data when pressing enter
searchbox.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const newCity = searchbox.value.trim();
    if (newCity !== '') {
      insertphp(newCity);

      // Fetch weather data for the new city

    } else {
      alert('Please enter a city name.');
    }
  }
});

// for fetching data when pressing search
searchBtn.addEventListener('click', () => {

  const newCity = searchbox.value.trim();
  if (newCity !== '') {
    insertphp(newCity);

    // Fetch weather data for the new city

  } else {
    alert('Please enter a city name.');
  }

}
);
async function checkNetworkStatus(title) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=${apiKey}`);
    return "Online";
  } catch (error) {
    return "Offline";
  }
}

async function insertphp(title) {
  const isOnline = await checkNetworkStatus(title);
  console.log("Network status:", isOnline);

  // Inserting Data in Database
  // const response = await fetch(`http://localhost/weather4/insert.php?title=${title}`);

  if (isOnline == "Online") {
    //Inserting Data in Database
    const response = await fetch(`insert.php?title=${title}`);
    fetchData(title);
  } else {
    fetchLocalData(title);
  }

  insertData(title);
}

//insert data function
const spressure = document.querySelectorAll(".spressure");
const sHumid = document.querySelectorAll(".shumid");
const swindspeed = document.querySelectorAll(".swindspeed");
const seventemp = document.querySelectorAll(".seventemp");
const sevenimg = document.querySelectorAll(".sevenicon");


// Creating async function to display data for seven days
async function insertData(title) {
  // Fetching data from php 
  const response = await fetch(`json.php?title=${title}`);

  // Coverting data into JSON  format
  const sevendata = await response.json();
  console.log(sevendata);

  // Putting 'No Data' before inserting any data
  spressure.forEach(element => {
    element.innerHTML = '';
    element.textContent = 'NA';
  });

  sHumid.forEach(element => {
    element.innerHTML = '';
    element.textContent = 'NA';
  });

  swindspeed.forEach(element => {
    element.innerHTML = '';
    element.textContent = 'NA';
  });

  seventemp.forEach(element => {
    element.innerHTML = '';
    element.textContent = 'NO DATA';
  });

  sevenimg.forEach(element => {
    element.innerHTML = '';
  });

  //Inserting sevendays Data from Database 
  sevendata.forEach((weather) => {
    //  If Sunday
    if (weather.day == "Sun") {
      const pressure = document.querySelector("#Sun .spressure");
      const Humid = document.querySelector("#Sun .shumid");
      const Windspeed = document.querySelector("#Sun .swindspeed");
      const Temperature = document.querySelector("#Sun .seventemp");
      const icon = document.querySelector("#Sun .sevenicon");
      pressure.innerHTML = '';
      Humid.innerHTML = '';
      Windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      icon.innerHTML = '';
      // Inserting data fetched from database for Sunday
      pressure.textContent = `${weather.pressure}hPa`;
      Humid.textContent = `${weather.humidity}%`;
      Windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `<img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
    // If Monday
    else if (weather.day == "Mon") {
      const Pressure = document.querySelector("#Mon .spressure");
      const humid = document.querySelector("#Mon .shumid");
      const windspeed = document.querySelector("#Mon .swindspeed");
      const Temperature = document.querySelector("#Mon .seventemp");
      const icon = document.querySelector("#Mon .sevenicon");

      Pressure.innerHTML = '';
      humid.innerHTML = '';
      windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      icon.innerHTML = '';

      // Inserting data fetched from database for Monday
      Pressure.textContent = `${weather.pressure}hPa`;
      humid.textContent = `${weather.humidity}%`;
      windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `<img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
    // If Tuesday
    else if (weather.day == "Tue") {
      const Pressure = document.querySelector("#Tue .spressure");
      const humid = document.querySelector("#Tue .shumid");
      const windspeed = document.querySelector("#Tue .swindspeed");
      const Temperature = document.querySelector("#Tue .seventemp");
      const icon = document.querySelector("#Tue .sevenicon");

      Pressure.innerHTML = '';
      humid.innerHTML = '';
      windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      Pressure.innerHTML = '';

      // Inserting data fetched from database for Tuesday
      Pressure.textContent = `${weather.pressure}hPa`;
      humid.textContent = `${weather.humidity}%`;
      windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `<img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
    // If Wednesday
    else if (weather.day == "Wed") {
      const Pressure = document.querySelector("#Wed .spressure");
      const humid = document.querySelector("#Wed .shumid");
      const windspeed = document.querySelector("#Wed .swindspeed");
      const Temperature = document.querySelector("#Wed .seventemp");
      const icon = document.querySelector("#Wed .sevenicon");

      Pressure.innerHTML = '';
      humid.innerHTML = '';
      windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      icon.innerHTML = '';

      // Inserting data fetched from database for Wednesday
      Pressure.textContent = `${weather.pressure}hPa`;
      humid.textContent = `${weather.humidity}%`;
      windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `<img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
    // If Thursday
    else if (weather.day == "Thu") {
      const Pressure = document.querySelector("#Thu .spressure");
      const humid = document.querySelector("#Thu .shumid");
      const windspeed = document.querySelector("#Thu .swindspeed");
      const Temperature = document.querySelector("#Thu .seventemp");
      const icon = document.querySelector("#Thu .sevenicon");

      Pressure.innerHTML = '';
      humid.innerHTML = '';
      windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      icon.innerHTML = '';

      // Inserting data fetched from database for Thursday
      Pressure.textContent = `${weather.pressure}hPa`;
      humid.textContent = `${weather.humidity}%`;
      windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `<img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
    // If Friday
    else if (weather.day == "Fri") {
      const Pressure = document.querySelector("#Fri .spressure");
      const humid = document.querySelector("#Fri .shumid");
      const windspeed = document.querySelector("#Fri .swindspeed");
      const Temperature = document.querySelector("#Fri .seventemp");
      const icon = document.querySelector("#Fri .sevenicon");

      Pressure.innerHTML = '';
      humid.innerHTML = '';
      windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      icon.innerHTML = '';

      // Inserting data fetched from database for Friday
      Pressure.textContent = `${weather.pressure}hPa`;
      humid.textContent = `${weather.humidity}%`;
      windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `<img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
    // If Saturday
    else if (weather.day == "Sat") {
      const Pressure = document.querySelector("#Sat .spressure");
      const humid = document.querySelector("#Sat .shumid");
      const windspeed = document.querySelector("#Sat .swindspeed");
      const Temperature = document.querySelector("#Sat .seventemp");
      const icon = document.querySelector("#Sat .sevenicon");

      Pressure.innerHTML = '';
      humid.innerHTML = '';
      windspeed.innerHTML = '';
      Temperature.innerHTML = '';
      icon.innerHTML = '';

      // Inserting data fetched from database for Saturday
      Pressure.textContent = `${weather.pressure}hPa`;
      humid.textContent = `${weather.humidity}%`;
      windspeed.textContent = `${weather.windspeed}m/s`;
      Temperature.textContent = `${parseFloat(weather.temp).toFixed(0)}°C`;
      icon.innerHTML = `    <img src="https://github.com/Anuj-Programmer/images/raw/main/images/${weather.images}.png" alt="" class="sevenimg">`;
    }
  });
}




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
      throw new Error('City not found');
    }
    localStorage.setItem(city, JSON.stringify(data))

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
      weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Clouds.png'
    } else if (data.weather[0].main == 'Clear') {
      weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Clear.png'
    } else if (data.weather[0].main == 'Rain') {
      weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
      weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
      weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Mist.png'
    } else if (data.weather[0].main == 'Snow') {
      weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Snow.png'
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
      alert('Invalid input');
    }
  }
}

async function fetchLocalData(city) {
  try {
    // Retrieve data from localStorage
    const data = JSON.parse(localStorage.getItem(city));

    // Check if data exists in localStorage
    console.log(data);
    // Update UI with data from localStorage
    document.querySelector('#place').textContent = data.name;
  const temperatureCelsius = (data.main.temp - 273).toFixed(0);
  document.querySelector('#maintem').textContent = `${temperatureCelsius}°C`;
  document.querySelector('.pressure').textContent = `${data.main.pressure} hPa`;
  document.querySelector('.windspeed').textContent = `${data.wind.speed} m/s`;
  document.querySelector('.humid').textContent = `${data.main.humidity} %`;
  document.querySelector('#weather').textContent = data.weather[0].main;
  document.querySelector('.weather-image').src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Rain.png'
  // if (data.weather[0].main == 'Clouds') {
  //   weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Clouds.png'
  // } else if (data.weather[0].main == 'Clear') {
  //   weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Clear.png'
  // } else if (data.weather[0].main == 'Rain') {
  //   weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Rain.png'
  // } else if (data.weather[0].main == 'Drizzle') {
  //   weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Drizzle.png'
  // } else if (data.weather[0].main == 'Mist') {
  //   weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Mist.png'
  // } else if (data.weather[0].main == 'Snow') {
  //   weathericon.src = 'https://github.com/Anuj-Programmer/images/raw/main/images/Snow.png'
  // }

  updateLiveTime(data.timezone);
  } catch (error) {
    console.log(error);

    // Show appropriate error message
    if (error.message === 'City data not found in localStorage') {
      alert('City data not found in localStorage. Please connect to the internet to fetch data.');
    } else {
      alert('An error occurred. Please try again later.');
    }
  }
}

// function updateUIWithData(data) {
//   // Update UI with data from localStorage
  

//   // Update weather icon based on weather condition
//   updateWeatherIcon(data.weather[0].main);

//   // Update live time
  
// }

// function updateWeatherIcon(weatherCondition) {
//   let weatherIconSrc;

//   // Set appropriate weather icon source based on weather condition
//   switch (weatherCondition) {
//     case 'Clouds':
//       weatherIconSrc = 'https://github.com/Anuj-Programmer/images/raw/main/images/Clouds.png';
//       break;
//     case 'Clear':
//       weatherIconSrc = 'https://github.com/Anuj-Programmer/images/raw/main/images/Clear.png';
//       break;
//     case 'Rain':
//       weatherIconSrc = 'https://github.com/Anuj-Programmer/images/raw/main/images/Rain.png';
//       break;
//     case 'Drizzle':
//       weatherIconSrc = 'https://github.com/Anuj-Programmer/images/raw/main/images/Drizzle.png';
//       break;
//     case 'Mist':
//       weatherIconSrc = 'https://github.com/Anuj-Programmer/images/raw/main/images/Mist.png';
//       break;
//     case 'Snow':
//       weatherIconSrc = 'https://github.com/Anuj-Programmer/images/raw/main/images/Snow.png';
//       break;
//     default:
//       // Default to a generic weather icon
//       weatherIconSrc = 'https://example.com/generic_weather_icon.png';
//       break;
//   }

//   // Update the weather icon src attribute
//   weathericon.src = weatherIconSrc;
// }


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



// // Update the live time every minute
// setInterval(() => {
//     fetchData(cityName);
// }, 60000);







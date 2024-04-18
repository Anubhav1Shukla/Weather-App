async function fetchData() {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0297393839msh454d6f51b3a184dp1739a9jsn803a957c75e8',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  const getWeather = async (city) => {
    try {
      cityName.innerHTML = city;
      const response = await fetch(`${url}?city=${city}`, options);
      
      if (response.ok) {
        const result = await response.json(); // Parse response as JSON
        console.log(result);

        // Check if the required properties are present in the result
        if (result.cloud_pct !== undefined &&
            result.temp !== undefined &&
            result.feels_like !== undefined &&
            result.humidity !== undefined &&
            result.min_temp !== undefined &&
            result.max_temp !== undefined &&
            result.wind_speed !== undefined &&
           
            result.sunrise !== undefined &&
            result.sunset !== undefined) {

          cloud_pct.innerHTML = result.cloud_pct;
          temp.innerHTML = result.temp;
          feels_like.innerHTML = result.feels_like;
          humidity.innerHTML = result.humidity;
          min_temp.innerHTML = result.min_temp;
          max_temp.innerHTML = result.max_temp;
          wind_speed.innerHTML = result.wind_speed;
         
          sunrise.innerHTML = result.sunrise;
          sunset.innerHTML = result.sunset;
        } else {
          console.error('Error: Required properties are undefined in the API response.');
        }
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedCity = city.value;
    getWeather(selectedCity);
  });

  // Initial city (you can change it as needed)
  getWeather("New Delhi");
}

fetchData();

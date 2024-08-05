document.addEventListener("DOMContentLoaded", () => {

    const weatherIcons = {
        'clear sky': 'icons/01clearsky.png',
        'few clouds': 'icons/02fewclouds.png',
        'scattered clouds': 'icons/03scatteredclouds.png',
        'broken clouds': 'icons/04brokenclouds.png',
        'shower rain': 'icons/05showerrain.png',
        'rain': 'icons/06rain.png',
        'thunderstorm': 'icons/07thunderstrom.png',
        'snow': 'icons/08snow.png',
        'mist': 'icons/09mist.png',
        'overcast clouds': 'icons/03scatteredclouds.png',
        'light rain': 'icons/05showerrain.png',
        'moderate rain': 'icons/05showerrain.png',
        'haze': 'icons/09mist.png',
        'heavy intensity rain': 'icons/06rain.png',
        'default': 'icons/default.png',
    };

    const fetchWeatherData = (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`City not found: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                const temperature = data.main.temp;
                const weatherCondition = data.weather[0].description;
                const cityName = data.name;
                const weatherIcon = weatherIcons[weatherCondition] || weatherIcons['default'];

                document.querySelector('.weather-info').innerHTML = `
                    <p>City: ${cityName}</p>
                    <p>Temperature: ${temperature} °C</p>
                    <p>Condition: ${weatherCondition}</p>
                    <img src="${weatherIcon}" alt="${weatherCondition}" class="weather-icon">
                `;

                fetchForecastData(city);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.querySelector('.weather-info').innerHTML = `
                    <p>Error: ${error.message}</p>
                `;
            });
    };

    const fetchForecastData = (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`City not found: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Forecast data:', data);
                displayForecast(data);
            })
            .catch(error => {
                console.error('Error fetching forecast data:', error);
            });
    };

    const displayForecast = (data) => {
        const forecastContainer = document.querySelector('.forecast-info');
        forecastContainer.innerHTML = '';

        const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));

        dailyForecasts.forEach(forecast => {
            const date = new Date(forecast.dt_txt);
            const temperature = forecast.main.temp;
            const weatherCondition = forecast.weather[0].description;
            const weatherIcon = weatherIcons[weatherCondition] || weatherIcons['default'];

            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');
            forecastElement.innerHTML = `
                <p>${date.toDateString()}</p>
                <p>Temperature: ${temperature} °C</p>
                <p>Condition: ${weatherCondition}</p>
                <img src="${weatherIcon}" alt="${weatherCondition}" class="weather-icon">
            `;

            forecastContainer.appendChild(forecastElement);
        });
    };

    document.getElementById('search-button').addEventListener('click', () => {
        const city = document.getElementById('city-input').value;
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name');
        }
    });

    fetchWeatherData('Nagpur');
});

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    document.body.appendChild(contentDiv);

    const createForm = () => {
        const form = document.createElement('form');
        form.id = 'city-form';

        const label = document.createElement('label');
        label.setAttribute('for', 'city-input');
        label.textContent = 'Enter city name: ';

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'city-input';
        input.required = true;

        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Get Weather';

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(button);

        return form;
    };

    const createWeatherInfoContainer = () => {
        const weatherInfo = document.createElement('div');
        weatherInfo.classList.add('weather-info');
        return weatherInfo;
    };
    const cityForm = createForm();
    const weatherInfo = createWeatherInfoContainer();

    contentDiv.appendChild(cityForm);
    contentDiv.appendChild(weatherInfo);

    const cityInput = document.getElementById('city-input');
    
    cityForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const cityName = cityInput.value;
        const apiKey = 'ccdc5ccb8a4446ba86c85506230708';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const formattedData = {
                location: data.location.name,
                temperature: data.current.temp_c,
                condition: data.current.condition.text,
                windSpeed: data.current.wind_kph,
                humidity: data.current.humidity,
                pressure: data.current.pressure_mb,
                cloud: data.current.cloud,
                visibility: data.current.vis_km
            };
            displayWeatherInfo(formattedData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Error fetching weather data';
        }
    });

    const displayWeatherInfo = (data) => {
        const infoHtml = `
            <h2>${data.location}</h2>
            <p>Temperature: ${data.temperature} °C</p>
            <p>Condition: ${data.condition}</p>
            <p>Wind Speed: ${data.windSpeed} kph</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Pressure: ${data.pressure} mb</p>
            <p>Cloud Coverage: ${data.cloud}%</p>
            <p>Visibility: ${data.visibility} km</p>
        `;
        weatherInfo.innerHTML = infoHtml;
    };
});

console.log("hello webpack");

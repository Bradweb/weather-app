/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n    const contentDiv = document.createElement('div');\n    contentDiv.id = 'content';\n    document.body.appendChild(contentDiv);\n\n    const createForm = () => {\n        const form = document.createElement('form');\n        form.id = 'city-form';\n\n        const label = document.createElement('label');\n        label.setAttribute('for', 'city-input');\n        label.textContent = 'Enter city name: ';\n\n        const input = document.createElement('input');\n        input.type = 'text';\n        input.id = 'city-input';\n        input.required = true;\n\n        const button = document.createElement('button');\n        button.type = 'submit';\n        button.textContent = 'Get Weather';\n\n        form.appendChild(label);\n        form.appendChild(input);\n        form.appendChild(button);\n\n        return form;\n    };\n\n    const createWeatherInfoContainer = () => {\n        const weatherInfo = document.createElement('div');\n        weatherInfo.classList.add('weather-info');\n        return weatherInfo;\n    };\n    const cityForm = createForm();\n    const weatherInfo = createWeatherInfoContainer();\n\n    contentDiv.appendChild(cityForm);\n    contentDiv.appendChild(weatherInfo);\n\n    const cityInput = document.getElementById('city-input');\n    \n    cityForm.addEventListener('submit', async (event) => {\n        event.preventDefault();\n\n        const cityName = cityInput.value;\n        const apiKey = 'ccdc5ccb8a4446ba86c85506230708';\n        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;\n\n        try {\n            const response = await fetch(apiUrl);\n            const data = await response.json();\n            const formattedData = {\n                location: data.location.name,\n                temperature: data.current.temp_c,\n                condition: data.current.condition.text,\n                windSpeed: data.current.wind_kph,\n                humidity: data.current.humidity,\n                pressure: data.current.pressure_mb,\n                cloud: data.current.cloud,\n                visibility: data.current.vis_km\n            };\n            displayWeatherInfo(formattedData);\n        } catch (error) {\n            console.error('Error fetching weather data:', error);\n            weatherInfo.textContent = 'Error fetching weather data';\n        }\n    });\n\n    const displayWeatherInfo = (data) => {\n        const infoHtml = `\n            <h2>${data.location}</h2>\n            <p>Temperature: ${data.temperature} °C</p>\n            <p>Condition: ${data.condition}</p>\n            <p>Wind Speed: ${data.windSpeed} kph</p>\n            <p>Humidity: ${data.humidity}%</p>\n            <p>Pressure: ${data.pressure} mb</p>\n            <p>Cloud Coverage: ${data.cloud}%</p>\n            <p>Visibility: ${data.visibility} km</p>\n        `;\n        weatherInfo.innerHTML = infoHtml;\n    };\n});\n\nconsole.log(\"hello webpack\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
# WeatherApp

![WeatherApp](https://github.com/Nicro01/WeatherApp/blob/main/assets/weatherapp.png)

This repository contains the WeatherApp, a web application that provides real-time weather information for a given location. The application is built using HTML, CSS, and JavaScript, and utilizes the OpenWeatherMap API to fetch weather data.

## Features

- Get current weather information for a specified location.
- Display temperature, humidity, wind speed, and weather description.
- Visual representation of weather conditions using icons.
- Search for weather in different locations.

## Preview

![WeatherApp Preview](https://github.com/Nicro01/WeatherApp/blob/main/assets/preview.gif)

## Installation

To run the WeatherApp locally, follow these steps:

1. Clone this repository to your local machine using the following command:
```
git clone https://github.com/Nicro01/WeatherApp.git
```

2. Navigate to the project directory:

```
cd WeatherApp
```

3. Open the `index.html` file in your preferred web browser.

## Usage

- Enter a location in the input field and click the "Search" button or press Enter.
- The application will fetch the weather data for the specified location and display it on the screen.
- The temperature is shown in Celsius by default. Click the temperature value to switch between Celsius and Fahrenheit.

## API Key

The WeatherApp uses the OpenWeatherMap API to fetch weather data. To run the application, you need to provide your own API key. Follow these steps to obtain an API key:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/) and sign up for a free account.
2. After signing in, go to your account dashboard and navigate to the API Keys section.
3. Generate a new API key by providing a name for the key.
4. Copy the generated API key.

Once you have obtained the API key, open the `script.js` file and replace the `API_KEY` variable with your own API key:

```javascript
const API_KEY = 'YOUR_API_KEY';
```
Save the file and the application will now be able to fetch weather data using your API key.

## Credits
- Weather icons provided by OpenWeatherMap.
- Background image by Unsplash.

## Contributing
Contributions to the WeatherApp are welcome! If you find any bugs or have suggestions for improvements, please create an issue or submit a pull request.

## License
This project is licensed under the **[MIT License](https://github.com/Nicro01/WeatherApp/blob/main/LICENSE)**. Feel free to modify and distribute this code for personal or commercial use.

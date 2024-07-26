# Weather Web Application

This is a simple weather web application that allows users to search for weather information by city. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.

## Features

- Search weather by city
- Displays temperature, weather description, humidity, and wind speed
- Shows an error message if the city is not found

## Technologies Used

- HTML
- CSS (with Poppins font and Boxicons)
- JavaScript
- OpenWeatherMap API

## Setup

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/codewithbsatyajit/weather-web-app.git
   cd weather-web-app
   ```

2. **Open the `index.html` file in your web browser:**

   You can do this by simply dragging and dropping the `index.html` file into your browser, or by using a live server extension in your code editor.

## File Structure

```
weather-web-app/
├── index.html
├── style.css
└── main.js
```

### `index.html`

The HTML file contains the structure of the web application, including the search box, weather display box, and error message elements.

### `style.css`

The CSS file styles the web application, including the layout, fonts, and responsiveness.

### `main.js`

The JavaScript file handles the functionality of the web application, including fetching weather data from the OpenWeatherMap API and updating the UI.

## Code Explanation

### HTML

The `index.html` file includes:

- A search box for users to enter their location.
- A weather display box to show temperature, weather description, humidity, and wind speed.
- An error message displayed if the city is not found.

### CSS

The `style.css` file includes:

- Importing the Poppins font from Google Fonts.
- Resetting margin and padding for all elements.
- Styling the body, container, search box, weather display box, and error message elements.

### JavaScript

The `main.js` file includes:

- Selecting necessary DOM elements.
- Adding a click event listener to the search button.
- Fetching weather data from the OpenWeatherMap API.
- Updating the UI with weather data or showing an error message if the city is not found.

## API Key

This project uses the OpenWeatherMap API. Replace the `APIKey` variable in the `main.js` file with your own API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

```javascript
const APIKey = "868e7a263c0066b3e6c34ad7a443c3b2";
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Google Fonts](https://fonts.google.com/) for the Poppins font.
- [Boxicons](https://boxicons.com/) for the icon library.

## Contact

For any inquiries, please contact [Satyajit Behera](mailto:satyajitkk3032@gmail.com).
- Instagram: [@bsatyajit_](https://www.instagram.com/bsatyajit_/)
```

You can now use this as the `README.md` file for your GitHub repository.

const ACCESS_KEY = "7373a5f2d72d2a075b977d27cbe7b777";

const _retrieveWeatherForecastMockedData = () =>
  fetch("/data/weather-api-mocked-data.json")
    .then((res) => res.json())
    .catch((err) => console.log("Oh no", err));

const _retrieveWeatherForecastApiData = (coordinates) =>
  fetch(
    `http://api.weatherstack.com/current?accessKey=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`
  )
    .then((res) => res.json())
    .catch((err) => console.log("Oh no", err));

const retrieveWeatherForecastData = async (coordinates, isMocked) => {
  if (isMocked) {
    return await _retrieveWeatherForecastMockedData();
  }
  return await _retrieveWeatherForecastApiData(coordinates);
};

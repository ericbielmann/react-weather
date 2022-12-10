const getLocationWeather = async (location) => {
  try {
    const apiKey = 'fd41a374a26844bab90221440221012';
    const result = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    );

    if (result.status === 200) {
      return { success: true, data: await result.json() };
    }

    return { success: false, error: result.statusText };
  } catch (ex) {
    return { success: false, error: ex.message };
  }
};
export default getLocationWeather;
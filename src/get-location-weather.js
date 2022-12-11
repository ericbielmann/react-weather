const getLocationWeather = async (location) => {
  try {
    const result = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no`
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
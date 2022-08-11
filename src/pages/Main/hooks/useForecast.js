import { useState, useEffect } from 'react';
import weatherApi from '@api/weatherApi';
import { changeSpeedUnit, getLocalDay, getLocalMonth, getLocalTime } from '@utility/formatData';

export default function useForecast(searchText, units) {
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(true);
  const [popUpError, setPopUpError] = useState(false);
  const [timeout, setTimeout] = useState(false);

  // for default display when first load
  useEffect(() => {
    fetchWeatherData(searchText);
  }, [units]);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const responseLocation =
        (await weatherApi.getWeatherData('weather', {
          q: searchText || 'Hanoi',
          appid: process.env.REACT_APP_API_KEY,
        })) || {};
      if (!responseLocation.coord) return;
      const { lat, lon } = responseLocation.coord;
      const responseForecast = await weatherApi.getWeatherData('onecall', {
        lat,
        lon,
        appid: process.env.REACT_APP_API_KEY,
        units,
      });

      // time info
      const { current, timezone } = responseForecast;
      const localDay = getLocalDay(current.dt, timezone);
      const localMonth = getLocalMonth(current.dt, timezone);
      const localTime = getLocalTime(current.dt, timezone);
      const localName = timezone.replace('/', ', ');

      // weather info
      let { sunrise, sunset, temp, pressure, humidity, uvi, wind_speed } = current;
      let { description, icon } = current.weather[0];
      const iconScr = weatherApi.getWeatherIconScr(icon);
      description = description.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      sunrise = getLocalTime(sunrise, timezone);
      sunset = getLocalTime(sunset, timezone);
      temp = Math.round(temp);
      if (units === 'imperial') {
        wind_speed = changeSpeedUnit(wind_speed);
        wind_speed = Math.round(wind_speed * 100) / 100;
        temp = `${temp}°F`;
      } else {
        temp = `${temp}°C`;
      }

      // hourly temperature
      const hourlyTemp = [];
      for (let hour = 0; hour <= 24; hour += 3) {
        if (hourlyTemp.length < 9) {
          let temp = responseForecast.hourly[hour].temp;
          temp = Math.round(temp);
          if (units === 'imperial') {
            temp = `${temp}°F`;
          } else {
            temp = `${temp}°C`;
          }
          hourlyTemp.push(temp);
        }
      }

      //daily rain chance
      const dailyRainChance = responseForecast.daily.slice(0, 7).map((day) => {
        return Math.round(day.pop * 100);
      });

      setForecastData({
        sunrise,
        sunset,
        temp,
        pressure,
        humidity,
        uvi,
        wind_speed,
        description,
        iconScr,
        localDay,
        localMonth,
        localTime,
        localName,
        hourlyTemp,
        dailyRainChance,
      });
      setLoading(false);
    } catch (err) {
      if (err?.response?.data?.cod === '404') {
        setPopUpError(true);
        setLoading(false);
      } else {
        console.log('Failed to fetch weather data\n', err);
        setTimeout(true);
      }
    }
  };

  const fetchData = () => {
    fetchWeatherData(searchText);
  };

  const closePopUp = () => {
    setPopUpError(false);
  };

  const closeTimeout = () => {
    setTimeout(false);
  };

  return { forecastData, fetchData, loading, popUpError, closePopUp, timeout, closeTimeout };
}

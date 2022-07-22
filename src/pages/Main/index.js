import React, { useState, useEffect } from 'react';
import './main.scss';
import WeatherLeft from '@components/WeatherLeft';
import WeatherRight from '@components/WeatherRight';
import weatherApi from '@api/weatherApi';
import { changeSpeedUnit, changeTempUnit, getLocalDay, getLocalMonth, getLocalTime } from '@utility/formatData';

export default function MainPage() {
  const [forecastData, setForecastData] = useState({});
  const [searchText, setSearchText] = useState('Hanoi');
  const [units, setUnits] = useState('metric');

  // for default display when first load
  useEffect(() => {
    fetchWeatherData(searchText);
  }, [units]);

  const fetchWeatherData = async (searchText) => {
    try {
      const responseLocation = await weatherApi.getWeatherData('weather', {
        q: searchText,
        appid: process.env.REACT_APP_API_KEY,
      });
      const { lat, lon } = responseLocation.coord;
      const responseForecast = await weatherApi.getWeatherData('onecall', {
        lat,
        lon,
        appid: process.env.REACT_APP_API_KEY,
        units,
      });

      // time info
      const { current, timezone } = responseForecast;
      let localDay = getLocalDay(current.dt, timezone);
      let localMonth = getLocalMonth(current.dt, timezone);
      let localTime = getLocalTime(current.dt, timezone);
      let localName = timezone.replace('/', ', ');

      // weather info
      let { sunrise, sunset, temp, pressure, humidity, uvi, wind_speed } = current;
      let { description, icon } = current.weather[0];
      const iconScr = weatherApi.getWeatherIconScr(icon);
      description = description.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      sunrise = getLocalTime(sunrise, timezone);
      sunset = getLocalTime(sunset, timezone);

      if (units === 'imperial') {
        wind_speed = changeSpeedUnit(wind_speed);
        wind_speed = Math.round(wind_speed * 100) / 100;
        temp = changeTempUnit(temp);
        temp = `${temp}°F`;
      } else {
        temp = `${temp}°C`;
      }

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
      });
    } catch (err) {
      if (err?.response?.status === 404) {
        alert('City not found');
      }
      console.log('Failed to fetch weather data', err);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(searchText);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const degreeData = [30, 40, 45, 50, 49, 45, 40, 31];
  const degreeCategories = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
  const rainData = [30, 20, 40, 50];
  const rainCategories = ['7PM', '8PM', '9PM', '10PM'];

  return (
    <section className="weather">
      <WeatherLeft
        degreeData={degreeData}
        degreeCategories={degreeCategories}
        forecastData={forecastData}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        units={units}
        setUnits={setUnits}
      />
      <WeatherRight rainData={rainData} rainCategories={rainCategories} forecastData={forecastData} units={units} />
    </section>
  );
}

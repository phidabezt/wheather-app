import React, { useState, useEffect } from 'react';
import './main.scss';
import WeatherLeft from '@components/WeatherLeft';
import WeatherRight from '@components/WeatherRight';
import PopUp from '@components/PopUp';
import weatherApi from '@api/weatherApi';
import { debounce } from 'lodash';
import { changeSpeedUnit, getLocalDay, getLocalMonth, getLocalTime } from '@utility/formatData';

import IconWind from '@animated/dust-wind.svg';
import IconCloudRain from '@animated/raindrops.svg';
import IconPressure from '@animated/tornado.svg';
import IconSun from '@animated/uv-index.svg';
import IconSunRise from '@animated/clear-day.svg';
import IconSunSet from '@animated/haze-day.svg';

export default function MainPage() {
  const [forecastData, setForecastData] = useState({});
  const [searchText, setSearchText] = useState('Hanoi');
  const [units, setUnits] = useState('metric');
  const [loading, setLoading] = useState(true);
  const [popUpError, setPopUpError] = useState(false);

  // for default display when first load
  useEffect(() => {
    fetchWeatherData(searchText);
  }, [units]);

  const fetchWeatherData = async (searchText) => {
    try {
      setLoading(true);
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
        temp = `${temp}°F`;
      } else {
        temp = `${temp}°C`;
      }

      // hourly temperature
      let hourlyTemp = [];
      for (let hour = 0; hour <= 24; hour += 3) {
        if (hourlyTemp.length < 9) {
          let temp = responseForecast.hourly[hour].temp;
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
      debounceLoading();
    } catch (err) {
      if (err?.response?.status === 404) {
        setPopUpError(true);
        setLoading(false);
      } else {
        console.log('Failed to fetch weather data', err);
      }
    }
  };

  const debounceLoading = debounce(() => {
    setLoading(false);
  }, 1000);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (popUpError) {
      return;
    }
    fetchWeatherData(searchText);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleLocationClick = () => {
    if (searchText === 'Hanoi') return;
    setSearchText('Hanoi');
    fetchWeatherData();
  };

  const weatherInfoList = [
    { id: 1, name: 'Wind Speed', iconSrc: IconWind, value: `${forecastData.wind_speed} m/s` },
    { id: 2, name: 'Humidity', iconSrc: IconCloudRain, value: `${forecastData.humidity} %` },
    { id: 3, name: 'Pressure', iconSrc: IconPressure, value: `${forecastData.pressure} hPa` },
    { id: 4, name: 'UV Index', iconSrc: IconSun, value: `${forecastData.uvi}` },
  ];

  const sunInfoList = [
    { id: 1, name: 'rise', iconSrc: IconSunRise, value: forecastData.sunrise },
    { id: 2, name: 'set', iconSrc: IconSunSet, value: forecastData.sunset },
  ];

  return (
    <section className="weather">
      {popUpError ? <PopUp setTrigger={setPopUpError} /> : null}

      <WeatherLeft
        forecastData={forecastData}
        units={units}
        setUnits={setUnits}
        loading={loading}
        weatherInfoList={weatherInfoList}
        searchText={searchText}
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={handleSearchChange}
        onLocationClick={handleLocationClick}
      />
      <WeatherRight forecastData={forecastData} units={units} loading={loading} sunInfoList={sunInfoList} />
    </section>
  );
}

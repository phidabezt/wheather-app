import React, { useState, useEffect } from 'react';
import './main.scss';
import WeatherLeft from '@components/WeatherLeft';
import WeatherRight from '@components/WeatherRight';
import weatherApi from '@api/weatherApi';
import { debounce } from 'lodash';
import { changeSpeedUnit, getLocalDay, getLocalMonth, getLocalTime } from '@utility/formatData';

export default function MainPage() {
  const [forecastData, setForecastData] = useState({});
  const [searchText, setSearchText] = useState('Hanoi');
  const [units, setUnits] = useState('metric');
  const [loading, setLoading] = useState(true);

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
        temp = `${temp}??F`;
      } else {
        temp = `${temp}??C`;
      }

      // hourly temperature
      let hourlyTemp = [];
      for (let hour = 0; hour <= 24; hour += 3) {
        if (hourlyTemp.length < 9) {
          let temp = responseForecast.hourly[hour].temp;
          if (units === 'imperial') {
            temp = `${temp}??F`;
          } else {
            temp = `${temp}??C`;
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
      // setLoading(false);
      debounceLoading();
    } catch (err) {
      if (err?.response?.status === 404) {
        alert('City not found');
      }
      console.log('Failed to fetch weather data', err);
    }
  };

  const debounceLoading = debounce(() => {
    setLoading(false);
  }, 2000);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(searchText);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="weather">
      <WeatherLeft
        forecastData={forecastData}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        units={units}
        setUnits={setUnits}
        loading={loading}
      />
      <WeatherRight forecastData={forecastData} units={units} loading={loading} />
    </section>
  );
}

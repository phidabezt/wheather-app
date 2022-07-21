import React, { useState, useEffect } from 'react';
import './main.scss';
import WeatherLeft from '@components/WeatherLeft';
import WeatherRight from '@components/WeatherRight';
import weatherApi from '@api/weatherApi';

export default function MainPage() {
  const [forecastData, setForecastData] = useState();
  const [timeInfo, setTimeInfo] = useState({});
  const [weatherInfo, setWeatherInfo] = useState({});
  const [searchText, setSearchText] = useState('Hanoi');
  const [units, setUnits] = useState('metric');

  // for default display when first load
  useEffect(() => {
    fetchWeatherData(searchText);
  }, [units]);

  useEffect(() => {
    if (forecastData) {
      showTimeLocal();
      showWeatherInfo();
    }
  }, [forecastData]);

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
      setForecastData(responseForecast);
    } catch (err) {
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

  const getLocalTime = (dt, timezone) => {
    const date = new Date(dt * 1000);
    const time = date.toLocaleString('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return time;
  };

  const getLocalMonth = (dt, timezone) => {
    const date = new Date(dt * 1000);
    const month = date.toLocaleString('en-US', {
      timeZone: timezone,
      month: 'long',
      year: 'numeric',
    });
    return month;
  };

  const getLocalDay = (dt, timezone) => {
    const date = new Date(dt * 1000);
    const day = date.toLocaleString('en-US', {
      timeZone: timezone,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return day;
  };

  const showTimeLocal = () => {
    const { current, timezone } = forecastData;
    setTimeInfo({
      localDay: getLocalDay(current.dt, timezone),
      localMonth: getLocalMonth(current.dt, timezone),
      localTime: getLocalTime(current.dt, timezone),
      locationName: timezone.replace('/', ', '),
    });
  };

  const showWeatherInfo = () => {
    const { current, timezone } = forecastData;
    let { sunrise, sunset, temp, feels_like, pressure, humidity, uvi, wind_speed } = current;
    let { description, icon } = current.weather[0];
    const iconScr = weatherApi.getWeatherIconScr(icon);

    description = description.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    sunrise = getLocalTime(sunrise, timezone);
    sunset = getLocalTime(sunset, timezone);

    if (units === 'imperial') {
      // change wind_speed from miles/hour to meter/second
      wind_speed = wind_speed / 2.23693629;
      wind_speed = Math.round(wind_speed * 100) / 100;
    }

    if (units === 'imperial') {
      // change temp from celsius to fahrenheit
      temp = Math.round((temp * 9) / 5 + 32);
      temp = `${temp}°F`;
    } else {
      temp = `${temp}°C`;
    }

    setWeatherInfo({
      sunrise,
      sunset,
      temp,
      feels_like,
      pressure,
      humidity,
      uvi,
      wind_speed,
      description,
      iconScr,
    });
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
        timeInfo={timeInfo}
        weatherInfo={weatherInfo}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        units={units}
        setUnits={setUnits}
      />
      <WeatherRight
        rainData={rainData}
        rainCategories={rainCategories}
        timeInfo={timeInfo}
        weatherInfo={weatherInfo}
        units={units}
      />
    </section>
  );
}

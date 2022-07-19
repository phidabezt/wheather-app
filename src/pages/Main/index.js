import React, { useState, useEffect } from 'react';
import './main.scss';
import WeatherLeft from '../../components/WeatherLeft';
import WeatherRight from '../../components/WeatherRight';
import weatherApi from '../../api/weatherApi';

export default function MainPage() {
  const [forecastData, setForecastData] = useState({});
  const [timeInfo, setTimeInfo] = useState({});
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    const fetchWeatherData = async () => {
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
          units: 'metric',
        });
        setForecastData(responseForecast);
      } catch (err) {
        console.log('Failed to fetch weather data', err);
      }
    };

    fetchWeatherData();
  }, [searchText]);

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

  const formatTimeCurrent = () => {
    const { current, timezone } = forecastData;
    setTimeInfo({
      localDay: getLocalDay(current.dt, timezone),
      localMonth: getLocalMonth(current.dt, timezone),
      localTime: getLocalTime(current.dt, timezone),
      locationName: timezone.replace('/', ', '),
    });
  };

  const [degreeData, setDegreeData] = useState([30, 40, 45, 50, 49, 45, 40, 31]);
  const degreeCategories = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
  const [rainData, setRainData] = useState([30, 20, 40, 50]);
  const rainCategories = ['7PM', '8PM', '9PM', '10PM'];

  return (
    <section className="weather">
      <WeatherLeft
        degreeData={degreeData}
        degreeCategories={degreeCategories}
        timeInfo={timeInfo}
        setSearchText={setSearchText}
        formatTimeCurrent={formatTimeCurrent}
      />
      <WeatherRight rainData={rainData} rainCategories={rainCategories} timeInfo={timeInfo} />
    </section>
  );
}

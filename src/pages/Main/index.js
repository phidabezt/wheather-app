import React, { useState, useEffect, useCallback } from 'react';
import './main.scss';
import WeatherLeft from '@components/WeatherLeft';
import WeatherRight from '@components/WeatherRight';
import PopUp from '@components/PopUp';
import weatherApi from '@api/weatherApi';
import useForecast from '../Main/hooks/useForecast';
import { changeSpeedUnit, getLocalDay, getLocalMonth, getLocalTime } from '@utility/formatData';

import IconWind from '@animated/dust-wind.svg';
import IconCloudRain from '@animated/raindrops.svg';
import IconPressure from '@animated/tornado.svg';
import IconSun from '@animated/uv-index.svg';
import IconSunRise from '@animated/clear-day.svg';
import IconSunSet from '@animated/haze-day.svg';

export default function MainPage() {
  // const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(true);
  const [popUpError, setPopUpError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [units, setUnits] = useState('metric');

  const { forecastData, handleSearchSubmit } = useForecast(
    searchText,
    units,
    loading,
    setLoading,
    popUpError,
    setPopUpError,
  );

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleLocationClick = (e) => {
    if (searchText === 'Hanoi') return;
    setSearchText('Hanoi');
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
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={handleSearchChange}
        onLocationClick={handleLocationClick}
        value={searchText}
      />
      <WeatherRight forecastData={forecastData} units={units} loading={loading} sunInfoList={sunInfoList} />
    </section>
  );
}

import React, { useState } from 'react';
import './main.scss';
import WeatherLeft from '@components/WeatherLeft';
import WeatherRight from '@components/WeatherRight';
import PopUp from '@components/PopUp';
import useForecast from '../Main/hooks/useForecast';

import IconWind from '@animated/dust-wind.svg';
import IconCloudRain from '@animated/raindrops.svg';
import IconPressure from '@animated/tornado.svg';
import IconSun from '@animated/uv-index.svg';
import IconSunRise from '@animated/clear-day.svg';
import IconSunSet from '@animated/haze-day.svg';

export default function MainPage() {
  const [searchText, setSearchText] = useState('');
  const [units, setUnits] = useState('metric');
  const { forecastData, fetchData, loading, popUpError, closePopUp } = useForecast(searchText, units);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleLocationClick = () => {
    if (searchText === 'Hanoi') return;
    setSearchText('Hanoi');
  };

  const handleClose = () => closePopUp(false);

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
      {popUpError ? <PopUp onClose={handleClose} /> : null}

      <WeatherLeft
        forecastData={forecastData}
        units={units}
        setUnits={setUnits}
        loading={loading}
        weatherInfoList={weatherInfoList}
        onSearchSubmit={fetchData}
        onSearchChange={handleSearchChange}
        onLocationClick={handleLocationClick}
        value={searchText}
      />
      <WeatherRight forecastData={forecastData} units={units} loading={loading} sunInfoList={sunInfoList} />
    </section>
  );
}

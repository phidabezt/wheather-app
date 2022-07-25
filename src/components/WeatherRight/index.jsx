import React from 'react';
import BasicInfo from '../BasicInfo';
import LocationInfo from '../LocationInfo';
import RainChanse from '../RainChanse';
import SunInfo from '../SunInfo';
import classes from './WeatherRight.module.scss';

function WeatherRight(props) {
  const { rainData, forecastData, units, loading } = props;
  return (
    <div className={classes['weather-right']}>
      <LocationInfo forecastData={forecastData} loading={loading} />
      <BasicInfo forecastData={forecastData} units={units} loading={loading} />
      <RainChanse dailyRainChance={forecastData.dailyRainChance} loading={loading} />
      <SunInfo forecastData={forecastData} loading={loading} />
    </div>
  );
}

export default WeatherRight;

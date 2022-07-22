import React from 'react';
import BasicInfo from '../BasicInfo';
import LocationInfo from '../LocationInfo';
import RainChanse from '../RainChanse';
import SunInfo from '../SunInfo';
import classes from './WeatherRight.module.scss';

function WeatherRight(props) {
  const { rainData, forecastData, units } = props;
  return (
    <div className={classes['weather-right']}>
      <LocationInfo forecastData={forecastData} />
      <BasicInfo forecastData={forecastData} units={units} />
      <RainChanse dailyRainChance={forecastData.dailyRainChance} />
      <SunInfo forecastData={forecastData} />
    </div>
  );
}

export default WeatherRight;

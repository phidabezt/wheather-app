import React from 'react';
import BasicInfo from '../BasicInfo';
import LocationInfo from '../LocationInfo';
import RainChanse from '../RainChanse';
import SunInfo from '../SunInfo';
import classes from './WeatherRight.module.scss';

function WeatherRight(props) {
  const { forecastData, units, loading, sunInfoList } = props;
  return (
    <div className={classes['weather-right']}>
      <LocationInfo forecastData={forecastData} loading={loading} />
      <BasicInfo forecastData={forecastData} units={units} loading={loading} />
      <RainChanse dailyRainChance={forecastData.dailyRainChance} loading={loading} />
      <SunInfo sunInfoList={sunInfoList} loading={loading} />
    </div>
  );
}

export default WeatherRight;

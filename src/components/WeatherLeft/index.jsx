import React from 'react';
import classes from './WeatherLeft.module.scss';
import SearchBar from '../SearchBar';
import TodayOverview from '../TodayOverview';
import ChartArea from '../ChartArea';

function WeatherLeft(props) {
  const {
    forecastData,
    units,
    setUnits,
    loading,
    weatherInfoList,
    onSearchSubmit,
    onSearchChange,
    onLocationClick,
    value,
  } = props;
  return (
    <div className={classes['weather-left']}>
      <SearchBar
        forecastData={forecastData}
        units={units}
        setUnits={setUnits}
        loading={loading}
        onSearchSubmit={onSearchSubmit}
        onSearchChange={onSearchChange}
        onLocationClick={onLocationClick}
        value={value}
      />
      <TodayOverview loading={loading} weatherInfoList={weatherInfoList} />
      <ChartArea hourlyTemp={forecastData.hourlyTemp} units={units} loading={loading} />
    </div>
  );
}

export default WeatherLeft;

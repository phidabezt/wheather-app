import React from 'react';
import classes from './WeatherLeft.module.scss';
import SearchBar from '../SearchBar';
import TodayOverview from '../TodayOverview';
import ChartArea from '../ChartArea';

function WeatherLeft(props) {
  const { forecastData, handleSearchSubmit, handleSearchChange, units, setUnits, loading } = props;
  return (
    <div className={classes['weather-left']}>
      <SearchBar
        forecastData={forecastData}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        units={units}
        setUnits={setUnits}
        loading={loading}
      />
      <TodayOverview forecastData={forecastData} loading={loading} />
      <ChartArea hourlyTemp={forecastData.hourlyTemp} units={units} loading={loading} />
    </div>
  );
}

export default WeatherLeft;

import React from 'react';
import classes from './WeatherLeft.module.scss';
import SearchBar from '../SearchBar';
import TodayOverview from '../TodayOverview';
import ChartArea from '../ChartArea';

function WeatherLeft(props) {
  const { forecastData, handleSearchSubmit, handleSearchChange, units, setUnits } = props;
  return (
    <div className={classes['weather-left']}>
      <SearchBar
        forecastData={forecastData}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        units={units}
        setUnits={setUnits}
      />
      <TodayOverview forecastData={forecastData} />
      <ChartArea hourlyTemp={forecastData.hourlyTemp} />
    </div>
  );
}

export default WeatherLeft;

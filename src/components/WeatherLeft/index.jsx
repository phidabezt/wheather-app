import React from 'react';
import classes from './WeatherLeft.module.scss';
import SearchBar from '../SearchBar';
import TodayOverview from '../TodayOverview';
import ChartArea from '../ChartArea';
import PropTypes from 'prop-types';

function WeatherLeft(props) {
  const { degreeData, degreeCategories, forecastData, handleSearchSubmit, handleSearchChange, units, setUnits } = props;
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
      <ChartArea degreeData={degreeData} degreeCategories={degreeCategories} />
    </div>
  );
}

WeatherLeft.propTypes = {
  degreeData: PropTypes.arrayOf(PropTypes.number).isRequired,
  degreeCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WeatherLeft;

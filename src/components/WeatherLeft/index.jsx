import React from 'react';
import classes from './WeatherLeft.module.scss';
import SearchBar from '../SearchBar';
import TodayOverview from '../TodayOverview';
import ChartArea from '../ChartArea';
import PropTypes from 'prop-types';

function WeatherLeft(props) {
  const { degreeData, degreeCategories, timeInfo, weatherInfo, handleSearchSubmit, handleSearchChange } = props;
  return (
    <div className={classes['weather-left']}>
      <SearchBar timeInfo={timeInfo} handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} />
      <TodayOverview weatherInfo={weatherInfo} />
      <ChartArea degreeData={degreeData} degreeCategories={degreeCategories} />
    </div>
  );
}

WeatherLeft.propTypes = {
  degreeData: PropTypes.arrayOf(PropTypes.number).isRequired,
  degreeCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WeatherLeft;

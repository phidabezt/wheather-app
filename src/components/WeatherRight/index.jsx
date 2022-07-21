import React from 'react';
import BasicInfo from '../BasicInfo';
import LocationInfo from '../LocationInfo';
import RainChanse from '../RainChanse';
import SunInfo from '../SunInfo';
import classes from './WeatherRight.module.scss';
import PropTypes from 'prop-types';

function WeatherRight(props) {
  const { rainData, rainCategories, timeInfo, weatherInfo } = props;
  return (
    <div className={classes['weather-right']}>
      <LocationInfo timeInfo={timeInfo} />
      <BasicInfo weatherInfo={weatherInfo} />
      <RainChanse rainData={rainData} rainCategories={rainCategories} />
      <SunInfo weatherInfo={weatherInfo} />
    </div>
  );
}

WeatherRight.propTypes = {
  rainData: PropTypes.arrayOf(PropTypes.number).isRequired,
  rainCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WeatherRight;

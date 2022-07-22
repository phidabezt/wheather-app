import React from 'react';
import classes from './LocationInfo.module.scss';

export default function LocationInfo(props) {
  const { forecastData } = props;
  return (
    <div className={classes['location-info']}>
      <h3 className={classes['location-info__title']}>{forecastData.localName}</h3>
      <p className={classes['location-info__clock']}>{forecastData.localTime}</p>
    </div>
  );
}

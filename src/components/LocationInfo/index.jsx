import React from 'react';
import classes from './LocationInfo.module.scss';

export default function LocationInfo(props) {
  const { timeInfo } = props;
  return (
    <div className={classes['location-info']}>
      <h3 className={classes['location-info__title']}>{timeInfo.locationName}</h3>
      <p className={classes['location-info__clock']}>{timeInfo.localTime}</p>
    </div>
  );
}

import React from 'react';
import Skeleton from '../Skeleton';
import classes from './LocationInfo.module.scss';

export default function LocationInfo(props) {
  const { forecastData, loading } = props;
  return (
    <div className={classes['location-info']}>
      {loading ? (
        <Skeleton width={200} height={50} bgColor="var(--color-blue-6)" />
      ) : (
        <h3 className={classes['location-info__title']}>{forecastData.localName}</h3>
      )}
      {loading ? (
        <Skeleton width={200} height={50} bgColor="var(--color-blue-6)" />
      ) : (
        <p className={classes['location-info__clock']}>{forecastData.localTime}</p>
      )}
    </div>
  );
}

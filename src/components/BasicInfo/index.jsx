import React from 'react';
import Skeleton from '../Skeleton';
import classes from './BasicInfo.module.scss';

export default function BasicInfo(props) {
  const { forecastData, loading } = props;
  return (
    <div className={classes['basic-info']}>
      {loading ? (
        <>
          <Skeleton width={200} height={130} bgColor="var(--color-blue-6)" />
          <Skeleton width={200} height={130} bgColor="var(--color-blue-6)" />
        </>
      ) : (
        <>
          <h3 className={classes['basic-info__degree']}>{forecastData.temp}</h3>
          <div className={classes['basic-info__content']}>
            <img src={forecastData.iconScr} alt="weather icon" className={classes['basic-info__icon']} />
            <p className={classes['basic-info__description']}>{forecastData.description} </p>
          </div>
        </>
      )}
    </div>
  );
}

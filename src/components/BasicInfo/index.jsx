import React from 'react';
import classes from './BasicInfo.module.scss';

export default function BasicInfo(props) {
  const { forecastData } = props;
  return (
    <div className={classes['basic-info']}>
      {forecastData.temp && <h3 className={classes['basic-info__degree']}>{forecastData.temp}</h3>}

      <div className={classes['basic-info__content']}>
        <img src={forecastData.iconScr} alt="weather icon" className={classes['basic-info__icon']} />
        <p className={classes['basic-info__description']}>{forecastData.description} </p>
      </div>
    </div>
  );
}

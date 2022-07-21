import React from 'react';
import classes from './BasicInfo.module.scss';
import IconCloudMoon from '@animated/overcast-night.svg';

export default function BasicInfo(props) {
  const { weatherInfo, units } = props;
  return (
    <div className={classes['basic-info']}>
      <div className={classes['basic-info__content']}>
        <img src={weatherInfo.iconScr} alt="weather icon" className={classes['basic-info__icon']} />
        {weatherInfo.temp && <h3 className={classes['basic-info__degree']}>{weatherInfo.temp}</h3>}
      </div>

      <p className={classes['basic-info__description']}>{weatherInfo.description}</p>
    </div>
  );
}

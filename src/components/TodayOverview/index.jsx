import React from 'react';
import classes from './TodayOverview.module.scss';
import IconWind from '@animated/dust-wind.svg';
import IconCloudRain from '@animated/raindrops.svg';
import IconPressure from '@animated/tornado.svg';
import IconSun from '@animated/uv-index.svg';

export default function TodayOverview(props) {
  const { weatherInfo } = props;
  return (
    <div className={classes['overview']}>
      <div className={classes['overview__inner']}>
        <h3 className={classes['overview__header']}>Today overview</h3>
        <div className={classes['overview__grids']}>
          <div className={`${classes['overview__grid']}`}>
            <img src={IconWind} alt="windy" className={classes['overview__icon']} />
            <p className={classes['overview__title']}>Wind Speed</p>
            <p className={classes['overview__value']}>{weatherInfo.wind_speed} m/s</p>
          </div>
          <div className={`${classes['overview__grid']}`}>
            <img src={IconCloudRain} alt="cloud-rain" className={classes['overview__icon']} />
            <p className={classes['overview__title']}>Humidity</p>
            <p className={classes['overview__value']}>{weatherInfo.humidity} %</p>
          </div>
          <div className={`${classes['overview__grid']}`}>
            <img src={IconPressure} alt="pressure" className={classes['overview__icon']} />
            <p className={classes['overview__title']}>Pressure</p>
            <p className={classes['overview__value']}>{weatherInfo.pressure} hpa</p>
          </div>
          <div className={`${classes['overview__grid']}`}>
            <img src={IconSun} alt="UV index" className={classes['overview__icon']} />
            <p className={classes['overview__title']}>Uv Index</p>
            <p className={classes['overview__value']}>{weatherInfo.uvi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

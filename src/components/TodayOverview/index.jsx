import React from 'react';
import classes from './TodayOverview.module.scss';
import IconWind from '@animated/dust-wind.svg';
import IconCloudRain from '@animated/raindrops.svg';
import IconPressure from '@animated/tornado.svg';
import IconSun from '@animated/uv-index.svg';
import Skeleton from '../Skeleton';

export default function TodayOverview(props) {
  const { forecastData, loading } = props;

  const weatherInfoList = [
    { id: 1, name: 'Wind Speed', iconSrc: IconWind, value: `${forecastData.wind_speed} m/s` },
    { id: 2, name: 'Humidity', iconSrc: IconCloudRain, value: `${forecastData.humidity} %` },
    { id: 3, name: 'Pressure', iconSrc: IconPressure, value: `${forecastData.pressure} hPa` },
    { id: 4, name: 'UV Index', iconSrc: IconSun, value: `${forecastData.uvi}` },
  ];

  return (
    <div className={classes['overview']}>
      <div className={classes['overview__inner']}>
        <h3 className={classes['overview__header']}>Today overview</h3>
        <div className={classes['overview__grids']}>
          {weatherInfoList.map((info) =>
            loading ? (
              <Skeleton width={380} height={114} key={info.id} />
            ) : (
              <div className={`${classes['overview__grid']}`} key={info.id}>
                <img src={info.iconSrc} alt={info.name} className={classes['overview__icon']} />
                <p className={classes['overview__title']}>{info.name}</p>
                <p className={classes['overview__value']}>{info.value}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

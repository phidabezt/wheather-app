import React from 'react';
import classes from './SearchBar.module.scss';
import SearchTag from '../SearchTag';
import Skeleton from '../Skeleton';

export default function SearchBar(props) {
  const { forecastData, onSearchSubmit, onSearchChange, units, setUnits, loading, onLocationClick, value } = props;

  return (
    <div className={classes['search']}>
      <div className={classes['search__date']}>
        {loading ? (
          <Skeleton width={130} height={50} />
        ) : (
          <>
            <h2 className={classes['search__month']}>{forecastData.localMonth}</h2>
            <h3 className={classes['search__day']}>{forecastData.localDay}</h3>
          </>
        )}
      </div>

      <div className={classes['search__interaction']}>
        <SearchTag
          onSearchSubmit={onSearchSubmit}
          onSearchChange={onSearchChange}
          onLocationClick={onLocationClick}
          value={value}
        />
      </div>

      <div className={classes['search__degree']}>
        <p
          className={`${classes['search__icon']} ${units === 'metric' ? `${classes['search__icon--active']}` : ''}`}
          onClick={() => {
            setUnits('metric');
          }}
        >
          C&deg;
        </p>
        <span>|</span>
        <p
          className={`${classes['search__icon']} ${units === 'imperial' ? `${classes['search__icon--active']}` : ''}`}
          onClick={() => {
            setUnits('imperial');
          }}
        >
          F&deg;
        </p>
      </div>
    </div>
  );
}

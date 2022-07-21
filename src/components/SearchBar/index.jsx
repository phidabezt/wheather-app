import React from 'react';
import classes from './SearchBar.module.scss';
import SearchTag from '../SearchTag';

export default function SearchBar(props) {
  const { timeInfo, handleSearchSubmit, handleSearchChange, units, setUnits } = props;
  const placeholder = 'Search for city ...';

  return (
    <div className={classes['search']}>
      <div className={classes['search__date']}>
        <h2 className={classes['search__month']}>{timeInfo.localMonth}</h2>
        <h3 className={classes['search__day']}>{timeInfo.localDay}</h3>
      </div>

      <div className={classes['search__interaction']}>
        <SearchTag
          placeholder={placeholder}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
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

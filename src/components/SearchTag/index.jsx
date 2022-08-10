import React from 'react';
import classes from './SearchTag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SearchTag(props) {
  const { onSearchSubmit, onSearchChange, onLocationClick, value } = props;

  return (
    <>
      <form
        className={classes['search-tag']}
        aria-label="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (value === '') return;
          onSearchSubmit();
        }}
      >
        <input
          value={value}
          type="text"
          autoFocus
          className={classes['search-tag__input']}
          name="city_search"
          placeholder="Search for city ..."
          onChange={(e) => {
            onSearchChange(e);
          }}
        />
        <button
          type="submit"
          className={classes['search-tag__button']}
          button-title="Search"
          aria-label="search-button"
        >
          <FontAwesomeIcon icon={faSearch} className={classes['search-tag__icon']} title="search" />
        </button>
      </form>
      <button
        className={classes['search-tag__location']}
        button-title="Your location"
        onClick={() => {
          onLocationClick();
        }}
      >
        <FontAwesomeIcon icon={faMapLocationDot} className={classes['search-tag__icon']} title="location" />
      </button>
    </>
  );
}

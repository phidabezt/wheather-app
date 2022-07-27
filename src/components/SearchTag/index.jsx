import React from 'react';
import classes from './SearchTag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SearchTag(props) {
  const { placeholder, onSearchSubmit, onSearchChange, onLocationClick, searchRef } = props;

  return (
    <>
      <form
        className={classes['search-tag']}
        onSubmit={(e) => {
          onSearchSubmit(e);
        }}
      >
        <input
          ref={searchRef}
          className={classes['search-tag__input']}
          name="city_search"
          placeholder={placeholder}
          onChange={(e) => {
            onSearchChange(e);
          }}
        />
        <button type="submit" className={classes['search-tag__button']} button-title="Search">
          <FontAwesomeIcon icon={faSearch} className={classes['search-tag__icon']} />
        </button>
        <button
          className={classes['search-tag__location']}
          button-title="Your location"
          onClick={(e) => {
            onLocationClick(e);
          }}
        >
          <FontAwesomeIcon icon={faMapLocationDot} className={classes['search-tag__icon']} />
        </button>
      </form>
    </>
  );
}

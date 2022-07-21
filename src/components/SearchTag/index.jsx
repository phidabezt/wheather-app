import React from 'react';
import classes from './SearchTag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SearchTag(props) {
  const { placeholder, handleSearchSubmit, handleSearchChange } = props;

  return (
    <form
      className={classes['search-tag']}
      onSubmit={(e) => {
        handleSearchSubmit(e);
      }}
    >
      <input
        className={classes['search-tag__input']}
        name="city_search"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearchChange(e);
        }}
      />
      <button type="submit" className={classes['search-tag__button']}>
        <FontAwesomeIcon icon={faSearch} className={classes['search-tag__icon']} />
      </button>
      <button className={classes['search-tag__location']}>
        <FontAwesomeIcon icon={faMapLocationDot} className={classes['search-tag__icon']} />
      </button>
    </form>
  );
}

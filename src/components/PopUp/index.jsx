import React from 'react';
import classes from './PopUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export default function PopUp(props) {
  const { onClose } = props;
  return (
    <div className={classes['popup']}>
      <div className={classes['popup-inner']}>
        <FontAwesomeIcon icon={faBan} className={classes['popup__icon']} />
        <h3>May be your city input is invalid</h3>
        <button type="button" autoFocus className={classes['popup__close']} tabIndex={0} onClick={onClose}>
          OKAY
        </button>
      </div>
    </div>
  );
}

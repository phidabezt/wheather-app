import React from 'react';
import classes from './PopUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faL } from '@fortawesome/free-solid-svg-icons';

export default function PopUp(props) {
  const { setTrigger } = props;

  return props.trigger ? (
    <div className={classes['popup']}>
      <div className={classes['popup-inner']}>
        <FontAwesomeIcon icon={faBan} className={classes['popup__icon']} />
        {props.children}
        <button
          className={classes['popup__close']}
          onClick={() => {
            setTrigger(false);
          }}
        >
          OKAY
        </button>
      </div>
    </div>
  ) : (
    ''
  );
}

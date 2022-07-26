import React from 'react';
import classes from './PopUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export default function PopUp(props) {
  const { setTrigger } = props;

  return props.trigger ? (
    <div className={classes['popup']}>
      <div className={classes['popup-inner']}>
        <FontAwesomeIcon icon={faBan} className={classes['popup__icon']} />
        {props.children}
        <button
          type="submit"
          className={classes['popup__close']}
          tabIndex={0}
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

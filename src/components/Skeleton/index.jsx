import React from 'react';
import classes from './Skeleton.module.scss';

export default function Skeleton(props) {
  const { width, height, bgColor } = props;
  return (
    <div
      className={classes['skeleton']}
      style={{ width, height, backgroundColor: bgColor || 'var(--color-blue-4)' }}
    ></div>
  );
}

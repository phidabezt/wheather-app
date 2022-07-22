import { SPEED_CONVERSION_FACTOR } from '@constants/factor';

// change wind_speed from miles/hour to meter/second
const changeSpeedUnit = (value) => {
  return value / SPEED_CONVERSION_FACTOR;
};

const getLocalTime = (dt, timezone) => {
  const date = new Date(dt * 1000);
  const time = date.toLocaleString('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return time;
};

const getLocalMonth = (dt, timezone) => {
  const date = new Date(dt * 1000);
  const month = date.toLocaleString('en-US', {
    timeZone: timezone,
    month: 'long',
    year: 'numeric',
  });
  return month;
};

const getLocalDay = (dt, timezone) => {
  const date = new Date(dt * 1000);
  const day = date.toLocaleString('en-US', {
    timeZone: timezone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return day;
};

export { changeSpeedUnit, getLocalDay, getLocalMonth, getLocalTime };

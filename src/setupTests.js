// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import ChartArea from '../src/components/ChartArea';

global.ResizeObserver = require('resize-observer-polyfill');

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div data-testid="weather-chart"></div>,
}));

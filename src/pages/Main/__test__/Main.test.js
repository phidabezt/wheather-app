import { render, screen, waitFor } from '@testing-library/react';
import { mockForecastData } from '~/mocks/mockForecastData';
import userEvent from '@testing-library/user-event';
import { mockCurrentWeather } from '~/mocks/mockCurrentWeather';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MainPage from '../index';

const server = setupServer(
  rest.get(`/weather`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockCurrentWeather,
      }),
      ctx.set('Content-Type', 'application/json'),
    );
  }),

  rest.get(`/onecall`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockForecastData,
      }),
      ctx.set('Content-Type', 'application/json'),
    );
  }),
);

beforeEach(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

it('should render and display data in the first place', async () => {
  render(<MainPage />);
  // wait for search date to be displayed
  await waitFor(() => screen.findByText(/uv index/i));
  // wait for weather data to be displayed
  expect(screen.getByText(/uv index/i)).toBeInTheDocument();
  expect(screen.getByText(/wind speed/i)).toBeInTheDocument();
  expect(screen.getByText(/pressure/i)).toBeInTheDocument();
  expect(screen.getByText(/humidity/i)).toBeInTheDocument();
});

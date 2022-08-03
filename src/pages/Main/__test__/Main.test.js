import { render, screen, waitFor } from '@testing-library/react';
import { mockForecastData } from '~/mocks/mockForecastData';
import userEvent from '@testing-library/user-event';
import { mockCurrentWeather } from '~/mocks/mockCurrentWeather';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MainPage from '../index';

const server = setupServer(
  rest.get('/weather?q=Hanoi&units=metric', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockCurrentWeather,
      }),
    );
  }),
);

rest.get('/onecall?lat=21.0277644&lon=105.8522219&units=metric', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      ...mockForecastData,
    }),
  );
});

beforeEach(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

it('should render and display data in the first place', async () => {
  render(<MainPage />);
  // wait for search date to be displayed

  await waitFor(() => screen.getByText(/uv index/i));

  expect(screen.getByText(/uv index/i)).toBeInTheDocument();
});

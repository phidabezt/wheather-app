import { render, screen } from '@testing-library/react';
import { mockWeatherInfoList } from '~/__fixtures__/mockData';

import TodayOverview from '..';

const [wind_speed, humidity, pressure, uvi] = [...mockWeatherInfoList];

describe('TodayOverview', () => {
  it('should render correctly', () => {
    render(<TodayOverview weatherInfoList={mockWeatherInfoList} />);
    expect(screen.getByText(wind_speed.name)).toBeVisible();
    expect(screen.getByText(wind_speed.value)).toBeVisible();

    expect(screen.getByText(humidity.name)).toBeVisible();
    expect(screen.getByText(humidity.value)).toBeVisible();

    expect(screen.getByText(pressure.name)).toBeVisible();
    expect(screen.getByText(pressure.value)).toBeVisible();

    expect(screen.getByText(uvi.name)).toBeVisible();
    expect(screen.getByText(uvi.value)).toBeVisible();
  });
});

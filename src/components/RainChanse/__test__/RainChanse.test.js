import { render, screen } from '@testing-library/react';
import { mockTransformedForecastData } from '~/__fixtures__/mockData';
import RainChanse from '..';

describe('Rain Chance', () => {
  it('should render properly', () => {
    const props = { dailyRainChance: mockTransformedForecastData.dailyRainChance, loading: false };
    render(<RainChanse {...props} />);
    expect(screen.getByTestId('weather-chart')).toBeInTheDocument();
  });

  it('should show skeleton when loading', async () => {
    const props = { dailyRainChance: mockTransformedForecastData.dailyRainChance, loading: true };

    render(<RainChanse {...props} />);
    expect(screen.getAllByLabelText('skeleton-loading')).toBeTruthy();
  });
});

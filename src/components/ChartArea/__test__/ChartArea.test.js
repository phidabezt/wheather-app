import { render, screen } from '@testing-library/react';
import ChartArea from '..';

describe('Chart Area', () => {
  it('should render ', async () => {
    const props = {
      hourlyTemp: ['34°C', '32°C', '27°C', '26°C', '26°C', '27°C', '31°C', '33°C', '32°C'],
      units: 'metric',
      loading: false,
    };

    render(<ChartArea {...props} />);
    expect(screen.getByTestId('weather-chart')).toBeInTheDocument();
  });

  it('should show skeleton when loading', async () => {
    const props = {
      hourlyTemp: [],
      units: 'metric',
      loading: true,
    };

    render(<ChartArea {...props} />);
    expect(screen.getAllByLabelText('skeleton-loading')).toBeTruthy();
  });
});

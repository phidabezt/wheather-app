import { render, screen, waitFor } from '@testing-library/react';
import ChartArea from '..';
// import Chart from 'react-apexcharts';

// window.SVGElement.prototype.getScreenCTM = () => {};
// window.SVGElement.prototype.createSVGMatrix = () => {};

// jest.mock('react-apexcharts', () => {
//   return {
//     ...jest.requireActual('react-apexcharts'),
//     // getScreenCTM: jest.fn(),
//   };
// });

describe('Chart Area', () => {
  // it('should render ', async () => {
  //   // need props

  //   const props = {
  //     hourlyTemp: ['34°C', '32°C', '27°C', '26°C', '26°C', '27°C', '31°C', '33°C', '32°C'],
  //     units: 'metric',
  //     loading: false,
  //   };

  //   // const { container } = render(<ChartArea {...props} />);
  //   render(<ChartArea {...props} />);
  //   screen.debug();
  //   expect(screen.getByText('Hourly Temperature')).toBeInTheDocument();
  //   // await waitFor(() => {
  //   //   expect(container.querySelector('#apexchartsbasicxbar')).toBeInTheDocument();
  //   // });
  // });

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

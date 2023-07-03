import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// third-party
import { useIntl } from 'react-intl';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

// chart options
const chartOptions = {
  chart: {
    type: 'donut'
  },
  legend: {
    show: true,
    fontFamily: `'Open Sans', sans-serif`,
    offsetX: 10,
    offsetY: 10,
    labels: {
      useSeriesColors: true
    },
    markers: {
      width: 12,
      height: 12,
      radius: 5
    },
    itemMargin: {
      horizontal: 25,
      vertical: 4
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  },
  responsive: [
    {
      breakpoint: 450,
      chart: {
        width: 280,
        height: 280
      },
      options: {
        legend: {
          show: false,
          position: 'bottom'
        }
      }
    }
  ]
};

// ==============================|| INCOME AREA CHART ||============================== //

const WellbeingDonutChart = ({ strong, weak, poor }) => {
  const theme = useTheme();
  const { mode } = useConfig();
  const { formatMessage } = useIntl();
  const [options, setOptions] = useState(chartOptions);
  const [series] = useState([strong, weak, poor]);

  const { primary } = theme.palette.text;

  const line = theme.palette.divider;
  const backColor = theme.palette.background.paper;

  const successDark = theme.palette.success.main;
  const orangeDark = theme.palette.warning.main;
  const errorDark = theme.palette.error.main;

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [successDark, orangeDark, errorDark],
      labels: [
        formatMessage({ id: 'strong' }),
        formatMessage({ id: 'weak' }),
        formatMessage({ id: 'poor' })
      ],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      legend: {
        labels: {
          colors: 'grey.500'
        }
      },
      stroke: {
        colors: [backColor]
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, line, backColor, successDark, orangeDark, errorDark]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={300}
      />
    </Box>
  );
};

WellbeingDonutChart.propTypes = {
  strong: PropTypes.number,
  weak: PropTypes.number,
  poor: PropTypes.number,
  slot: PropTypes.string
};

export default WellbeingDonutChart;

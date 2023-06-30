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
const areaChartOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

// ==============================|| INCOME AREA CHART ||============================== //

const GatewayAreaChart = ({ slot }) => {
  const theme = useTheme();
  const { mode } = useConfig();
  const { formatMessage } = useIntl();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.info.main, theme.palette.primary[700]],
      xaxis: {
        categories:
          slot === 'month'
            ? [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
              ]
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: [secondary]
          }
        },
        title: {
          text: `${formatMessage({ id: 'availability' })} (%)`,
          style: {
            color: secondary,
            fontWeight: theme.typography.fontWeightRegular
          }
        }
      },
      grid: {
        borderColor: line
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, secondary, line, theme, slot, formatMessage]);

  const [series, setSeries] = useState([
    {
      name: formatMessage({ id: 'availability' }),
      data: [0, 86, 28, 100, 48, 90, 100]
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: formatMessage({ id: 'availability' }),
        data:
          slot === 'month'
            ? [76, 85, 100, 98, 87, 100, 91, 100, 94, 86, 100, 35]
            : [31, 40, 28, 51, 42, 10, 100]
      }
    ]);
  }, [formatMessage, slot]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </Box>
  );
};

GatewayAreaChart.propTypes = {
  slot: PropTypes.string
};

export default GatewayAreaChart;

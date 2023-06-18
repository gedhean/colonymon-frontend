import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import { width } from '../../../../node_modules/@mui/system/index';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

// chart options
const chartOptions = {
  chart: {
    type: 'line',
    toolbar: {
      show: false
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  legend: {
    show: false
  }
};

// ==============================|| INCOME AREA CHART ||============================== //

const HiveLineChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(chartOptions);
  const [categories] = useState([
    'Horário 1',
    'Horário 2',
    'Horário 3',
    'Horário 4',
    'Horário 5',
    'Horário 6',
    'Horário 7'
  ]);
  const [series] = useState([
    {
      name: 'Temperatura',
      data: [25, 30, 31, 32, 33, 29, 26]
    }
  ]);

  const colorLevel = theme.palette.error.main;

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: Array.from({ length: categories.length }, () => () => colorLevel),
      xaxis: {
        show: false,
        categories,
        axisBorder: {
          show: true,
          color: line
        },
        labels: {
          style: {
            colors: Array.from({ length: categories.length }, () => secondary)
          }
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        show: true,
        labels: {
          formatter: (val) => val + '°C',
          style: {
            colors: [secondary]
          }
        },
        title: {
          text: 'Temperatura (°C)',
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
  }, [mode, secondary, line, theme, categories, colorLevel]);

  return (
    <Box id="chart" sx={{ bgColor: 'transparent' }}>
      <ReactApexChart
        options={options}
        series={series}
        height={350}
        type="line"
        width="100%"
      />
    </Box>
  );
};

export default HiveLineChart;

import { useState, useEffect, useCallback } from 'react';

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
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '15%',
      distributed: true,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => val + '%'
  },
  legend: {
    show: false
  }
};

// ==============================|| INCOME AREA CHART ||============================== //

const BatteryLevelBarChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();
  const { formatMessage } = useIntl();

  const { secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(chartOptions);
  const [categories] = useState([
    'Device 1',
    'Device 2',
    'Device 3',
    'Device 4',
    'Device 5',
    'Device 6',
    'Device 7'
  ]);
  const [series] = useState([
    {
      name: formatMessage({ id: 'battery-level' }),
      data: [5, 65, 28, 100, 48, 90, 100]
    }
  ]);

  const colorLevel = useCallback(
    (level) => {
      if (level <= 10) {
        return theme.palette.error.main;
      } else if (level <= 40) {
        return theme.palette.warning.main;
      } else if (level <= 70) {
        return theme.palette.info.main;
      } else {
        return theme.palette.success.main;
      }
    },
    [theme]
  );

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: Array.from(
        { length: categories.length },
        () =>
          ({ value }) =>
            colorLevel(value)
      ),
      xaxis: {
        categories,
        labels: {
          style: {
            colors: Array.from({ length: categories.length }, () => secondary)
          }
        },
        axisBorder: {
          show: true,
          color: line
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          formatter: (val) => val + '%',
          style: {
            colors: [secondary]
          }
        },
        title: {
          text: `${formatMessage({ id: 'battery-level' })} (%)`,
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
  }, [mode, secondary, line, theme, categories, colorLevel, formatMessage]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </Box>
  );
};

export default BatteryLevelBarChart;

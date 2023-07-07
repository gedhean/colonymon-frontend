import PropTypes from 'prop-types';
import { useEffect, useCallback, useState, useMemo } from 'react';

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

const categories = [
  'Apiário 1',
  'Apiário 2',
  'Apiário 3',
  'Apiário 4',
  'Apiário 5',
  'Apiário 6',
  'Apiário 7'
];

// chart options
const barChartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      // columnWidth: '45%',
      borderRadius: 4,
      distributed: true,
      dataLabels: {
        position: 'top'
      },
      colors: {
        ranges: [
          {
            from: -100,
            to: -50,
            color: '#F15B46'
          },
          {
            from: -51,
            to: 0,
            color: '#FEB019'
          },
          {
            from: 1,
            to: 100,
            color: '#1BC5BD'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => val + '%'
  },
  xaxis: {
    categories,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: true
    }
  },
  grid: {
    show: true
  },
  legend: {
    show: false
  }
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const WeightBarChart = ({ slot }) => {
  const theme = useTheme();
  const { mode } = useConfig();
  const { formatMessage } = useIntl();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series, setSeries] = useState([
    {
      name: formatMessage({ id: 'weight-gain' }),
      data: [80, 95, -70, 42, -15, 55, 78]
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);

  const gainColor = useCallback(
    (value) =>
      value >= 0 ? theme.palette.success.light : theme.palette.error.light,
    [theme]
  );
  const xLabelColors = useMemo(
    () => Array.from({ length: categories.length }, () => secondary),
    [secondary]
  );

  const colorsSeries = useMemo(
    () =>
      Array.from(
        { length: categories.length },
        () =>
          ({ value }) =>
            gainColor(value)
      ),
    [gainColor]
  );

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: colorsSeries,
      yaxis: {
        labels: {
          formatter: (val) => val + '%',
          style: {
            colors: [secondary]
          }
        },
        title: {
          text: `${formatMessage({ id: 'weight-gain' })} (%)`,
          style: {
            color: secondary,
            fontWeight: theme.typography.fontWeightRegular
          }
        }
      },
      xaxis: {
        categories,
        axisBorder: {
          show: false
        },
        labels: {
          style: {
            colors: xLabelColors
          }
        }
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [
    mode,
    primary,
    info,
    secondary,
    gainColor,
    formatMessage,
    theme.typography.fontWeightRegular,
    xLabelColors,
    colorsSeries
  ]);

  useEffect(() => {
    setSeries([
      {
        name: formatMessage({ id: 'weight-gain' }),
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * -100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * -100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100)
        ]
      }
    ]);
  }, [slot]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={365}
      />
    </Box>
  );
};

WeightBarChart.propTypes = {
  slot: PropTypes.oneOf(['week', 'month'])
};

export default WeightBarChart;

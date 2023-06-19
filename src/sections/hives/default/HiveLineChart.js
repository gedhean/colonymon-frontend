import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// project import
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

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

const HiveLineChart = ({
  formatter,
  formatterText,
  paletteGroup,
  color,
  minRange,
  maxRange,
  title,
  data
}) => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(chartOptions);
  const [categories] = useState(data.categories);
  const [series] = useState([data.series]);

  const colorLevel = theme.palette[paletteGroup][color];

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
        min: minRange,
        max: maxRange,
        show: true,
        labels: {
          formatter: (val) => val + `${formatter}`,
          style: {
            colors: [secondary]
          }
        },
        title: {
          text: `${formatterText}`,
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
  }, [
    mode,
    secondary,
    line,
    theme,
    categories,
    colorLevel,
    formatter,
    formatterText,
    maxRange,
    minRange,
    data
  ]);

  return (
    <Box
      id="chart"
      sx={{
        bgColor: 'transparent',
        border: '1px solid',
        borderColor: line,
        borderRadius: 4
      }}
    >
      <Typography variant="h5" sx={{ ml: '25px', mb: '10px', mt: '10px' }}>
        {title}
      </Typography>
      <ReactApexChart
        options={options}
        series={series}
        height={300}
        type="line"
        width="100%"
      />
    </Box>
  );
};

export default HiveLineChart;

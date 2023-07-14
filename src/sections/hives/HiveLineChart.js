import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

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
    width: 1
  },
  legend: {
    show: false
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

const HiveLineChart = ({
  toolFormatter,
  formatterLegendTextY,
  paletteGroup,
  minRange,
  maxRange,
  title,
  data
}) => {
  const theme = useTheme();
  const { mode } = useConfig();
  const line = theme.palette.divider;
  const { secondary } = theme.palette.text;
  const [options, setOptions] = useState(chartOptions);
  const [series, setSeries] = useState([]);

  console.log(data);

  const colorLevel = theme.palette[paletteGroup].main;

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [colorLevel],
      chart: {
        background:
          theme.palette.mode === ThemeMode.DARK
            ? 'secondary.lighter'
            : 'primary.lighter',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        show: false,
        // type: 'datetime',
        // format: 'HH:mm',
        // categories,
        axisBorder: {
          show: true,
          color: secondary
        },
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      yaxis: {
        show: true,
        labels: {
          formatter: (val) => val + ` ${toolFormatter}`,
          style: {
            colors: [secondary]
          }
        },
        title: {
          text: `${formatterLegendTextY}`,
          style: {
            color: secondary,
            fontWeight: theme.typography.fontWeightRegular
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
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
    colorLevel,
    toolFormatter,
    formatterLegendTextY,
    maxRange,
    minRange,
    data
  ]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSeries([
  //       {
  //         name: 'sample',
  //         data
  //       }
  //     ]);
  //   }, 200);
  // }, [data]);

  return (
    <Box
      id="chart"
      sx={{
        bgcolor:
          theme.palette.mode === ThemeMode.DARK
            ? 'secondary.lighter'
            : 'common.white',
        border: '1px solid',
        borderRadius: 1,
        borderColor: line,
        padding: '0 20px'
      }}
    >
      <Typography variant="h5" sx={{ ml: 3, mb: 0.5, mt: 3 }}>
        {title}
      </Typography>
      <ReactApexChart
        options={options}
        series={[{ name: 'sample', data }]}
        height={300}
        type="line"
        width="100%"
      />
    </Box>
  );
};

HiveLineChart.propTypes = {
  slot: PropTypes.string
};

export default HiveLineChart;

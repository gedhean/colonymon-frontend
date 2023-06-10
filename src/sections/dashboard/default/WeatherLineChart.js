import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import useWeather from 'hooks/useWeather';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

// chart options
const chartOptions = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 1
  },
};

// ==============================|| APEXCHART - LINE ||============================== //

const WeatherLineChart = ({ latitude, longitude }) => {
  const theme = useTheme();
  const { mode } = useConfig();
  const weather = useWeather(latitude, longitude);

  const line = theme.palette.divider;
  const { primary, secondary } = theme.palette.text;
  const grey200 = theme.palette.grey[200];
  const humidityColor = theme.palette.info.main;
  const temperatureColor = theme.palette.error.main;
  const uvColor = theme.palette.warning.main;

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(chartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [temperatureColor, humidityColor, uvColor],
      xaxis: {
        type: 'datetime',
        categories: weather.data.time,
        title: {
          text: 'Hora'
        },
        labels: {
          style: {
            colors: secondary
          }
        }
      },
      yaxis: [
        {
          min: 15,
          max: 50,
          forceNiceScale: true,
          title: {
            text: 'Temperatura (°C)',
            style: {
              color: secondary,
              fontWeight: theme.typography.fontWeightRegular
            }
          },
          labels: {
            formatter: (value) => `${value}°C`,
            style: {
              colors: secondary
            }
          }
        },
        {
          forceNiceScale: true,
          title: {
            text: 'Umidade (%)',
            style: {
              color: secondary,
              fontWeight: theme.typography.fontWeightRegular
            }
          },
          labels: {
            formatter: (value) => `${value}%`,
            style: {
              colors: secondary
            }
          }
        },
        {
          opposite: true,
          forceNiceScale: true,
          min: 0,
          max: 12,
          title: {
            text: 'Índice UV',
            style: {
              color: secondary,
              fontWeight: theme.typography.fontWeightRegular
            }
          },
          labels: {
            style: {
              colors: secondary
            }
          }
        }
      ],
      grid: {
        borderColor: line
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      },
      annotations: {
        xaxis: [
          {
            x: new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000),
            borderColor: primary,
            label: {
              style: {
                color: primary
              },
              text: 'Hora Atual'
            }
          }
        ]
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, line, grey200, secondary, weather.data.time, temperatureColor, humidityColor, uvColor, theme.typography.fontWeightRegular]);

  useEffect(() => {
    setSeries([
      {
        name: 'Temperature',
        data: weather.data.temperature
      },
      {
        name: 'Umidade',
        data: weather.data.humidity
      },
      {
        name: 'Índice UV',
        data: weather.data.uv,
      }
    ]);
  }, [weather.data.temperature, weather.data.humidity, weather.data.uv]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </Box>
  );
};

WeatherLineChart.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default WeatherLineChart;
import { useState, useEffect } from 'react';
import isBlank from 'utils/isBlank';

// ==============================|| WEATHER DATA ||============================== //

const LATITUDE_DEFAULT = -3.72;
const LONGITUDE_DEFAULT = -38.54;

const variables = 'hourly=temperature_2m,relativehumidity_2m,uv_index';
const extra = 'timezone=auto&forecast_days=1&temperature_unit=celsius';
const API_URL = `https://api.open-meteo.com/v1/forecast?${variables}&${extra}`;

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (isBlank(latitude) || isBlank(longitude)) {
    latitude = LATITUDE_DEFAULT;
    longitude = LONGITUDE_DEFAULT;
  }

  const coordinates = `latitude=${latitude}&longitude=${longitude}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}&${coordinates}`);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    };

    fetchData().catch((err) => {
      console.error(`Failed to fetch weather data:`, err);
      setLoading(false);
      setError(err);
    });
  }, [coordinates]);

  return {
    data: {
      time: weather?.hourly?.time ?? [],
      temperature: weather?.hourly?.temperature_2m ?? [],
      humidity: weather?.hourly?.relativehumidity_2m ?? [],
      uv: weather?.hourly?.uv_index ?? []
    },
    loading,
    error
  };
}

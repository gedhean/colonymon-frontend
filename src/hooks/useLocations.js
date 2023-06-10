import { useState, useEffect } from 'react';

// project import
import isBlank from 'utils/isBlank';

// ==============================|| LOCATION DATA ||============================== //

const API_URL = 'https://geocoding-api.open-meteo.com/v1/search?';

const useLocations = (search) => {
  const [locations, setLocations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isBlank(search)) return;

    const fetchData = async () => {
      const response = await fetch(`${API_URL}name=${search}`);
      const data = await response.json();
      setLocations(data);
      setLoading(false);
    };

    fetchData().catch((err) => {
      console.error(`Failed to fetch location data:`, err);
      setLoading(false);
      setError(err);
    });
  }, [search]);

  return {
    data: locations?.results ?? [],
    loading,
    error
  };
};

export default useLocations;

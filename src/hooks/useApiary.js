import { useState, useEffect } from 'react';

import apiaries from 'data/apiaries';

const useApiary = (apiaryId) => {
  const [loading, setLoading] = useState(true);
  const [apiary, setApiary] = useState({ hives: [] });

  useEffect(() => {
    const ap = apiaries.find((a) => Number(a.id) === Number(apiaryId));
    setApiary(ap);
    setLoading(false);
  }, [apiaryId]);

  return { data: apiary, loading };
};

export default useApiary;

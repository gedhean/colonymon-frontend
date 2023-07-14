import { useState, useEffect } from 'react';

import apiaries from 'data/apiaries';

const useHive = (apiaryId, hiveId) => {
  const [loading, setLoading] = useState(true);
  const [hive, setHive] = useState({});

  useEffect(() => {
    const ap = apiaries.find((a) => Number(a.id) === Number(apiaryId));
    const hv = ap?.hives?.find((h) => Number(h.id) === Number(hiveId));
    setHive({
      ...hv,
      apiaryName: ap?.name
    });
    setLoading(false);
  }, [apiaryId, hiveId]);

  return { data: hive, loading };
};

export default useHive;

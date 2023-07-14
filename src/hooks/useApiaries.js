import { useState, useEffect } from 'react';

import apiariesData from 'data/apiaries';

const HIVE_LOW_BATTERY = 10;

const HIVE_HEALTH_HEALTHY = 0;
const HIVE_HEALTH_WEAK = 1;
const HIVE_HEALTH_POOR = 2;

const ATTENTION_REASON_LOW_BATTERY = 0;
const ATTENTION_REASON_POOR_HEALTH = 1;
const ATTENTION_REASON_GATEWAY_OFFLINE = 2;

const calculateHivesHealth = (apiaries, health) => {
  return apiaries.reduce((acc, apiary) => {
    return acc + apiary.hives.filter((hive) => hive.health === health).length;
  }, 0);
};

const calculateHivesTotal = (apiaries) => {
  return apiaries.reduce((acc, apiary) => {
    return acc + apiary.hives.length;
  }, 0);
};

const hiveRequiresAttention = (hive) => {
  return (
    hive.health === HIVE_HEALTH_POOR ||
    hive.battery < HIVE_LOW_BATTERY ||
    !hive.gateway
  );
};

const getAttentionReason = (hive) => {
  if (hive.health === HIVE_HEALTH_POOR) {
    return ATTENTION_REASON_POOR_HEALTH;
  } else if (hive.battery < HIVE_LOW_BATTERY) {
    return ATTENTION_REASON_LOW_BATTERY;
  } else if (!hive.gateway) {
    return ATTENTION_REASON_GATEWAY_OFFLINE;
  }
};

const calculateHivesAttention = (apiaries) => {
  return apiaries.reduce((acc, apiary) => {
    const hives = apiary.hives.filter(hiveRequiresAttention).map((hive) => ({
      id: hive.id,
      name: hive.name,
      apiaryId: apiary.id,
      reason: getAttentionReason(hive)
    }));

    return [...acc, ...hives];
  }, []);
};

const useApiaries = () => {
  const [loading, setLoading] = useState(true);
  const [apiaries, setApiaries] = useState([]);

  useEffect(() => {
    setApiaries(apiariesData);
    setLoading(false);
  }, []);

  return {
    loading,
    data: apiaries,
    hivesStats: {
      healthy: calculateHivesHealth(apiaries, HIVE_HEALTH_HEALTHY) ?? 0,
      weak: calculateHivesHealth(apiaries, HIVE_HEALTH_WEAK) ?? 0,
      poor: calculateHivesHealth(apiaries, HIVE_HEALTH_POOR) ?? 0,
      total: calculateHivesTotal(apiaries) ?? 0
    },
    hivesAttention: calculateHivesAttention(apiaries) ?? []
  };
};

export default useApiaries;

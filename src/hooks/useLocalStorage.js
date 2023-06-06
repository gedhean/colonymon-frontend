import { useState, useEffect } from 'react';

// ==============================|| LOCAL STORAGE ||============================== //

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e) => {
      if (typeof window !== 'undefined' && e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      if (typeof window !== 'undefined') {
        const resultToStore = JSON.stringify(result);
        localStorage.setItem(key, resultToStore);

        // dispatch event so that other tabs if open can listen to storage change
        window.dispatchEvent(new StorageEvent('storage', {
          key,
          newValue: resultToStore,
          storageArea: localStorage
        }));
      }
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}

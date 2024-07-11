import {useState} from 'react';
import debounce from 'utils/debounce';

export const useFilters = () => {
  const [filterDebounceTimer] = useState<number>(700);
  const [params, setParams] = useState({});

  const handleSearch = debounce((inputValue: string) => {
    setParams({
      ...params,
      search: inputValue,
    });
  }, filterDebounceTimer);

  return {
    params,
    handleSearch,
  };
};

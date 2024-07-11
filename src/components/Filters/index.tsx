import {useEffect} from 'react';
import {fetchCharacters} from '../../store/reducers/ActionCreators';
import Search from '../Search';
import {useFilters} from 'hooks/useFilters';
import {useAppDispatch} from 'store/hooks/redux';

const Filters = () => {
  const {params, handleSearch} = useFilters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!Object.keys(params).length) dispatch(fetchCharacters(params));
  }, [params]);

  return (
    <div className="w-full flex gap-md z-20 items-end">
      <div className="animation-fade-y animation-delay-3 w-full">
        <Search
          onChange={e => {
            handleSearch(e.target.value);
          }}
          value={''}
        />
      </div>
    </div>
  );
};

export default Filters;

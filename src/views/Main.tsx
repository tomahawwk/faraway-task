import Card from 'components/Card';
import Skeleton from 'components/Card/Skeleton';
import Filters from 'components/Filters';
import List from 'components/List';
import Pagination from 'components/Pagination';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks/redux';
import {fetchCharacters} from 'store/reducers/ActionCreators';
import {getFiltersSelector} from 'store/reducers/FiltersSlice';

const skeletonArticles: any = [];

for (let i = 1; i <= 10; i++) {
  skeletonArticles.push(<Skeleton key={i} />);
}

const Main = () => {
  const {characters, count, prev, next, isLoading} = useAppSelector(
    state => state.charactersReducer,
  );
  const [hasElapsed, setHasElapsed] = useState<boolean>(true);
  const {params} = useAppSelector(getFiltersSelector);
  const dispatch = useAppDispatch();

  const onPage = (index: number) => {
    dispatch(fetchCharacters({...params, page: index}));
  };

  useEffect(() => {
    dispatch(fetchCharacters(params));
  }, []);

  useEffect(() => {
    setHasElapsed(true);
    let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setHasElapsed(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div className="grid items-start gap-md md:gap-lg">
      <h1 className="text-[24px] md:text-h1 animation-fade-y animation-delay-2">
        In galaxy, far, far away...
      </h1>
      <div className="grid items-start gap-lg md:gap-xl">
        <Filters />
        <div className="animation-fade-y animation-delay-6">
          {hasElapsed ? (
            <List>{skeletonArticles}</List>
          ) : characters.length ? (
            <List>
              {characters.map(character => (
                <div key={character.created}>
                  <Card {...character} id={character.url} />
                </div>
              ))}
            </List>
          ) : (
            <p>No characters were found for these filters.</p>
          )}
        </div>
        {count > characters.length && (
          <div className="animation-fade-y animation-delay-7">
            <Pagination
              count={count}
              prev={prev}
              next={next}
              onPageChange={onPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

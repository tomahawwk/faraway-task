import {combineReducers, configureStore} from '@reduxjs/toolkit';
import charactersReducer from './reducers/CharactersSlice';
import characterReducer from './reducers/CharacterSlice';
import filtersReducer from './reducers/FiltersSlice';

const rootReducer = combineReducers({
  charactersReducer,
  characterReducer,
  filtersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

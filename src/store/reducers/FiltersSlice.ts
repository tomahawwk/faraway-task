import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface FiltersState {
  params: Record<string, any>;
  searchTerm: string;
  wookie: boolean;
}

const initialState: FiltersState = {
  params: {format: 'json'},
  searchTerm: '',
  wookie: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFiltersParams(state, action: PayloadAction<{}>) {
      state.params = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setWookie(state, action: PayloadAction<boolean>) {
      state.wookie = action.payload;
    },
  },
});

export const {setFiltersParams, setSearchTerm, setWookie} =
  filtersSlice.actions;

export const getFiltersSelector = (state: RootState) => state.filtersReducer;

export default filtersSlice.reducer;

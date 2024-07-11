import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchCharacters} from './ActionCreators';
import {ICharacter} from 'store/models/ICharacter';
import {RootState} from '../store';

interface CharactersState {
  characters: ICharacter[];
  isLoading: boolean;
  next: string;
  prev: string;
  count: number;
  currentPageIndex: number;
}

const initialState: CharactersState = {
  characters: [],
  next: '',
  prev: '',
  count: 0,
  isLoading: false,
  currentPageIndex: 1,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCurrentPageIndex(state, action: PayloadAction<number>) {
      state.currentPageIndex = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchCharacters.fulfilled.type,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.characters = action.payload.results;
          state.next = action.payload.next;
          state.prev = action.payload.previous;
          state.count = action.payload.count;
        },
      )
      .addCase(fetchCharacters.pending.type, state => {
        state.isLoading = true;
      });
  },
});

export default charactersSlice.reducer;

export const getCharactersSelector = (state: RootState) =>
  state.charactersReducer;

export const {setCurrentPageIndex} = charactersSlice.actions;

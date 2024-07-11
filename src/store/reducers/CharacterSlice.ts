import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchCharacter} from './ActionCreators';
import {ICharacter} from 'store/models/ICharacter';

interface CharactersState {
  character: ICharacter;
  isLoading: boolean;
}

const initialCharacter: ICharacter = {
  birth_year: '',
  eye_color: '',
  mass: '',
  gender: '',
  hair_color: '',
  url: '',
  height: '',
  name: '',
  id: '',
  created: '',
};

const initialState: CharactersState = {
  character: initialCharacter,
  isLoading: false,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchCharacter.fulfilled.type,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.character = action.payload;
        },
      )
      .addCase(fetchCharacter.pending.type, state => {
        state.isLoading = true;
      });
  },
});

export default characterSlice.reducer;
export {initialCharacter};

import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseURL} from '../../constants';
import paramsToQuery from 'utils/paramsToQuery';

const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (params: Record<string, any>) => {
    const response = await axios.get(
      `${baseURL}/people/?${paramsToQuery(params)}`,
    );
    return response.data;
  },
);

const fetchCharacter = createAsyncThunk(
  'character/fetch',
  async (id: string) => {
    const response = await axios.get(`${baseURL}/people/${id}/?format=json`);
    return response.data;
  },
);

export {fetchCharacters, fetchCharacter};

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../libs/redux/store';
import CatService from '../../services/CatService';
import { Cat, CatsState } from '../../types';

const initialState: CatsState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchCats = createAsyncThunk<Cat[], { page?: number, limit?: number, order?: string }, { state: RootState, rejectValue: string }>(
  'cats/fetchCats',
  async (params, thunkAPI) => {
    const { page = 1, order = 'ASC', limit = 10 } = params;
    const response = await CatService.getCatsPage(params);

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    return response.json() as Promise<Cat[]>;
  },
);

const catsSlice = createSlice<CatsState, Record<string, never>>({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default catsSlice.reducer;

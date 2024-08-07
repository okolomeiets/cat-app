import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BreedsState, CatBreed } from '../../types';
import { RootState } from '../../libs/redux/store';
// eslint-disable-next-line import/no-named-as-default
import BreedsService from '../../services/BreedsService';

const initialState: BreedsState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchBreeds = createAsyncThunk<CatBreed[], { page?: number, limit?: number, order?: string }, { state: RootState, rejectValue: string }>(
  'breeds/fetchBreeds',
  async (params, thunkAPI) => {
    const { page = 1, order = 'ASC', limit = 10 } = params;
    const response = await BreedsService.getBreeds(params);

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    return response.json() as Promise<CatBreed[]>;
  },
);

const breedsSlice = createSlice<BreedsState, any>({
  name: 'breeds',
  initialState: initialState as BreedsState,
  reducers: {
    setBreeds: (state: BreedsState, action: PayloadAction<CatBreed[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default breedsSlice.reducer;

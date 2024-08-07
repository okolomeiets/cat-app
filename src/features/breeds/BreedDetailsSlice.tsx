import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BreedDetailsState } from '../../types';
import BreedsService from '../../services/BreedsService';

const initialState: BreedDetailsState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchBreedDetails = createAsyncThunk(
  'breedDetails/fetchBreedDetails',
  async ({ breedId }: { breedId: string }, thunkAPI) => {
    const response = await BreedsService.getBreedsDetails(breedId);

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    return response.json();
  },
);

const breedDetailsSlice = createSlice({
  name: 'breedDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreedDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBreedDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBreedDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default breedDetailsSlice.reducer;

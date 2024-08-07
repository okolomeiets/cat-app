import {
  createSlice, createAsyncThunk, PayloadAction, SerializedError,
} from '@reduxjs/toolkit';
import { RootState } from '../../libs/redux/store';
import { FavoriteItem, FavouriteCat, FavouriteState } from '../../types';
import FavouriteService from '../../services/FavouriteService';

const initialState: FavouriteState = {
  data: [],
  status: 'idle',
  loading: 'idle',
  error: null,
};

export const addToFavorite = createAsyncThunk<any, any>(
  'favourites/addToFavorite',
  async (body: { image_id: string, sub_id: string }, thunkAPI) => {
    try {
      const response = await FavouriteService.addToFavorite(body);

      if (!response.ok) {
        throw new Error('Failed to add to favorite');
      }

      const addResponse = await response.json();
      const getResponse = await FavouriteService.getFavoriteById(addResponse.id);

      return await getResponse.json();
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const removeFavorite = createAsyncThunk(
  'favourites/removeFavorite',
  async (params: { id: number }, thunkAPI) => {
    try {
      const response = await FavouriteService.removeFavorite(params.id);

      if (!response.ok) {
        throw new Error('Network response is not ok');
      }

      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchFavourites = createAsyncThunk<FavouriteCat[], void, { state: RootState, rejectValue: string }>(
  'favourites/fetchFavorites',
  async () => {
    const response = await FavouriteService.getFavourites();

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    return response.json() as Promise<FavouriteCat[]>;
  },
);

const favouritesSlice = createSlice<FavouriteState, Record<string, never>>({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'loading';
      })
      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(addToFavorite.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data.push(action.payload as FavouriteCat);
      })
      .addCase(
        addToFavorite.rejected,
        (state, action) => {
          state.loading = 'failed';
          state.error = (action as Record<string, any>).error?.message ? (action as Record<string, any>).error.message : 'An unknown error occurred';
        },
      )
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = state.data.filter((item) => item.id !== (action as Record<string, any>).meta.arg.id);
      });
  },
});

export default favouritesSlice.reducer;

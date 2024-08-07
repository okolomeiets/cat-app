import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import catsReducer from '../../features/catsList/catsSlice';

import favouritesReducer from '../../features/favouriteList/FavouriteSlice';
import breedsReducer from '../../features/breeds/BreedsSlise';
import breedDetailsReducer from '../../features/breeds/BreedDetailsSlice';

const store = configureStore({
  reducer: {
    cats: catsReducer,
    favourites: favouritesReducer,
    breeds: breedsReducer,
    breedDetails: breedDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;

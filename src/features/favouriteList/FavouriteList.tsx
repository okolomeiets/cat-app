import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AnyAction } from 'redux';
import { fetchFavourites } from './FavouriteSlice';
import { RootState } from '../../libs/redux/store';
import { useAppDispatch } from '../../libs/redux/hooks';
import Spinner from '../../components/Spinner';

const FavouriteList = () => {
  const dispatch = useAppDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.data);
  const status = useSelector((state: RootState) => state.favourites.status);
  const error = useSelector((state: RootState) => state.favourites.error);

  useEffect(() => {
    dispatch(fetchFavourites() as unknown as AnyAction);
  }, [dispatch]);

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div>
      <ImageList cols={5}>
        {favourites.map((favourite) => (
          <ImageListItem key={favourite.id}>
            <img alt="" src={favourite.image.url} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default FavouriteList;

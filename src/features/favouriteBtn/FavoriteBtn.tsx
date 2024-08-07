import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { Fab } from '@mui/material';
import { AppDispatch } from '../../libs/redux/store';
import { FavoriteBtnProps } from '../../types';
import { addToFavorite, removeFavorite } from '../favouriteList/FavouriteSlice';

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ catId, subId, favId }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addToFavorite({ image_id: catId, sub_id: subId }) as unknown as AnyAction);
  };

  const handleRemoveFavorite = () => {
    if (!favId) return;
    dispatch(removeFavorite({ id: favId }) as unknown as AnyAction);
  };

  return (
    <Stack spacing={1} direction="row" className="favorite-btn-wrap">
      {!favId ? (
        <Fab onClick={handleAddFavorite} size="small" aria-label="like" className="favorite-btn">
          <FavoriteBorderIcon />
        </Fab>
      ) : (
        <Fab onClick={handleRemoveFavorite} size="small" aria-label="liked" className="favorite-btn">
          <FavoriteIcon />
        </Fab>
      )}
    </Stack>
  );
};

export default FavoriteBtn;

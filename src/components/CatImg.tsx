import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteBtn from '../features/favouriteBtn/FavoriteBtn';
import { SUB_ID } from '../constants';
import { CatImgProps } from '../types';

const CatImg: React.FC<CatImgProps> = ({
  src, alt, favId, catId,
}) => (
  <ImageListItem sx={{ position: 'relative' }}>
    <img
      src={src}
      alt={`Cat ${alt}`}
      loading="lazy"
    />
    <FavoriteBtn favId={favId} subId={SUB_ID} catId={catId} />
  </ImageListItem>
);

export default CatImg;

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import { AnyAction } from 'redux';
import { fetchCats } from './catsSlice';
import { RootState } from '../../libs/redux/store';
import { useAppDispatch } from '../../libs/redux/hooks';
import { fetchFavourites } from '../favouriteList/FavouriteSlice';
import { FavoriteItem } from '../../types';
import PaginationComp from '../../components/PaginationComp';
import Spinner from '../../components/Spinner';
import CatImg from '../../components/CatImg';

const CatsList = () => {
  const dispatch = useAppDispatch();
  const cats = useSelector((state: RootState) => state.cats.data);
  const status = useSelector((state: RootState) => state.cats.status);
  const error = useSelector((state: RootState) => state.cats.error);
  const favourites = useSelector((state: RootState) => state.favourites.data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCats({ page: currentPage, limit: 20, order: 'ASC' }) as unknown as AnyAction);
    dispatch(fetchFavourites() as unknown as AnyAction);
  }, [currentPage, dispatch]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(fetchCats({ page: value, limit: 20, order: 'ASC' }) as unknown as AnyAction);
    setCurrentPage(value);
  };

  // {image_id1: fav_id1, image_id2: fav_id2, ...}
  const favMap = useMemo(() => {
    if (favourites.length) {
      return favourites.reduce((acc: Record<string, number>, el: FavoriteItem) => {
        acc[el.image_id] = el.id;
        return acc;
      }, {});
    }
    return {};
  }, [favourites]);

  if (status === 'failed') {
    return (
      <Box>
        Error:
        {error}
      </Box>
    );
  }

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <Box>
      <ImageList cols={5}>
        {cats.map((cat) => (
          <CatImg
            key={cat.id}
            src={cat.url}
            alt={`Cat ${cat.id}`}
            favId={favMap[cat.id]}
            catId={cat.id}
          />
        ))}
      </ImageList>
      <PaginationComp currentPage={currentPage} handlePageChange={handlePageChange} />
    </Box>
  );
};

export default CatsList;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AnyAction } from 'redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Alert, Box, Link } from '@mui/material';
import Spinner from '../../components/Spinner';
import { fetchBreedDetails } from './BreedDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../libs/redux/hooks';

const BreedDetails: React.FC = () => {
  const { breedId } = useParams<{ breedId: string }>();
  const dispatch = useAppDispatch();

  const breedDetails = useAppSelector((state) => state.breedDetails.data);
  const status = useAppSelector((state) => state.breedDetails.status);
  const error = useAppSelector((state) => state.breedDetails.error);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const breed = useAppSelector((state) => state.breeds.data.find((breed) => breed.id === breedId));

  useEffect(() => {
    if (breedId) {
      dispatch(fetchBreedDetails({ breedId }) as unknown as AnyAction);
    }
  }, [dispatch, breedId]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return (
      <Alert severity="error">
        Error:
        {error}
      </Alert>
    );
  }

  return (
    <Box>
      <h1>{breed?.name}</h1>
      <ImageList cols={3}>
        {breedDetails.map((details) => (
          <ImageListItem key={details.id}>
            <img src={details.url} alt="" />
          </ImageListItem>
        ))}
      </ImageList>
      <p>{breed?.description}</p>
      <Link href={breed?.wikipedia_url}>Read more on Wikipedia</Link>
    </Box>

  );
};

export default BreedDetails;

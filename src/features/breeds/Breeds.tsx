import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import {
  Alert, Box, Button, Card, CardActions, CardContent, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { fetchBreeds } from './BreedsSlise';
import { RootState } from '../../libs/redux/store';
import { useAppDispatch } from '../../libs/redux/hooks';

const Breeds = () => {
  const dispatch = useAppDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.data);
  const status = useSelector((state: RootState) => state.breeds.status);
  const error = useSelector((state: RootState) => state.breeds.error);

  useEffect(() => {
    dispatch(fetchBreeds({ page: 1, limit: 20 }) as unknown as AnyAction);
  }, [dispatch]);

  if (status === 'failed') {
    return (
      <Alert severity="error">
        Error:
        {error}
      </Alert>
    );
  }

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <Grid container spacing={2}>
      {breeds.map((breed) => (
        <Grid item xs={12} md={12} key={breed.id}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {breed.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {breed.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to={`/breed/${breed.id}`}>Read More</Link></Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Breeds;

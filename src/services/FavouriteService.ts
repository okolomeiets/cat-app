import { API_KEY, SUB_ID } from '../constants';

export default class FavouriteService {
  static getFavourites() {
    return fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });
  }

  static getFavoriteById(id: string) {
    return fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });
  }

  static removeFavorite(id: number) {
    return fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });
  }

  static addToFavorite(body: { image_id: string, sub_id: string }) {
    return fetch(`https://api.thecatapi.com/v1/favourites?&sub_id=${SUB_ID}&order=DESC`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,

      },
      body: JSON.stringify(body),
    });
  }
}

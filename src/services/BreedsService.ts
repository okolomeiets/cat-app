import { BASE_URL } from '../constants';

export default class BreedsService {
  static getBreeds({ page = 1, limit = 10 }: { page?: number, limit?: number }) {
    return fetch(`${BASE_URL}/breeds?limit=${limit}&page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  static getBreedsDetails(breedId: string) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&limit=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

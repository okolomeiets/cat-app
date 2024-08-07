import { API_KEY, BASE_URL } from '../constants';

export default class CatService {
  static getCatsPage({ page = 1, limit = 10, order = 'ASC' }: { page?: number, limit?: number, order?: string }) {
    return fetch(`${BASE_URL}/images/search?limit=${limit}&page=${page}&order=${order}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });
  }
}

// export class CatService {
//     static getCatsPage(params: {page?: number, limit?: number, order?: string}) {
//         const {page = 1, limit = 10, order = "ASC"} = params;
//         return fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}`, {
//             method: 'GET',
//             headers: {
//                 'x-api-key': API_KEY
//             }
//         });
//     }
// }

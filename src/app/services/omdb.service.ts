import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OmdbService {

  constructor(private _http: HttpClient) {
    // console.log('service ok');
  }

  getQuery(query:string) {
    const url = `http://www.omdbapi.com/?apikey=39098adf${query}`;
    return this._http.get(url);
  }

  getMovies(movie:string) {
    return this.getQuery(`&t=${movie}`)
  }

  getMovie(id:string) {
    return this.getQuery(`&i=${id}&plot=full`)
  }
}

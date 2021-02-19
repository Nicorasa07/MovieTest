import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OmdbService {

  urlApi:string;
  moviesList:string[] = ['Pulp Fiction', 'Venom', 'Avengers Endgame', 'Life of Pi', 'Godzilla', 'Thor', 'Greenland', 'The Martian', 'Deadpool', 'After', 'The Wolf of Wall Street', 'Blade Runner 2049', 'Joker', 'Avatar', 'The Social Network', 'The Imitation Game'];


  constructor(private _http: HttpClient) {
    this.urlApi = `${environment.urlApi}?apikey=${environment.apiKey}`;
  }

  getMovies(movie:string):Observable<any> {
    return this._http.get(`${this.urlApi}&t=${movie}`);
  }

  getMovie(id:string):Observable<any> {
    return this._http.get(`${this.urlApi}&i=${id}&plot=full`);
  }
}

export interface Movie{
  Title:string;
  Poster:string;
  imdbID:string;
  Plot:string;
  Director:string,
  Writer:string,
  Actors:string,
  Genre:string
};
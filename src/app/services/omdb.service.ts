import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';


@Injectable({
  providedIn: 'root'
})

export class OmdbService {

  urlApi:string;
  genresList:string[] = ['Drama', 'Adventure', 'Sci-Fi', 'Thriller', 'Action'];
  moviesList:string[] = ['tt0110912', 'tt1270797', 'tt4154796', 'tt0454876', 'tt0831387', 'tt0800369', 'tt7737786', 'tt3659388', 'tt1431045', 'tt4126476', 'tt0993846', 'tt1856101', 'tt7286456', 'tt0499549', 'tt1285016', 'tt2084970'];

  constructor(private _http: HttpClient) {
    this.urlApi = `${environment.urlApi}?apikey=${environment.apiKey}`;
  }

  getGenres():string[] {
    return this.genresList;
  }

  getMovies():string[] {
    return this.moviesList;
  }

  getInfoMovie(movie:string):Observable<Movie> {
    return this._http.get<Movie>(`${this.urlApi}&i=${movie}&plot=full`);
  }

}
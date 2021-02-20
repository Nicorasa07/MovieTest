import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {

  moviesList:string[] = [];
  movies:Movie[] = [];
  moviesArr:Movie[] = [];

  genreActive:string = '';
  genres:string[] = [];

  constructor(private _omdbService: OmdbService) {
  };

  ngOnInit():void {
    this.getGenres();
    this.getMovies();
  };

  getGenres():void {
    this.genres = this._omdbService.getGenres();
  };

  getMovies():void {
    this.moviesList = this._omdbService.getMovies();
    this.getMovieService();
  };

  getMovieService():void {
    this.moviesList.forEach(movie => {
      this._omdbService.getInfoMovie(movie)
      .subscribe(data => this.movies.push(data));
    });
    this.moviesArr = this.movies;
  };

  filterMovies(genre:string):void {
    const moviesCopy = this.movies.filter(movie => movie.Genre.indexOf(genre) >= 0);
    this.moviesArr = moviesCopy;
    this.genreActive = genre;
  };
}

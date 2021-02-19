import { Component, OnInit } from '@angular/core';
import { OmdbService, Movie } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {

  movies:Movie[] = [];
  moviesArr:Movie[] = [];
  genreActive:string = '';
  genres:string[] = ['Drama', 'Adventure', 'Sci-Fi', 'Thriller', 'Action'];

  constructor(private _omdbService: OmdbService) {
    this._omdbService.moviesList.forEach(movie => {
      this._omdbService.getMovies(movie)
      .subscribe(data => this.movies.push(data));
    });
    this.moviesArr = this.movies;
  };

  filterMovies(genre:string):void {
    const moviesCopy = this.movies.filter(movie => movie.Genre.indexOf(genre) >= 0);
    this.moviesArr = moviesCopy;
    this.genreActive = genre;
  };

  ngOnInit():void {
  };

}

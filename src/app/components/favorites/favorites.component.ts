import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites:string[] = [];
  movies:Movie[] = [];

  constructor(private _omdbService: OmdbService) {
  };

  ngOnInit():void {
    this.getFavorites();
  };

  getFavorites():void {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    if (this.favorites !== null) {
      this.favorites.forEach(movie => {
        this.getMovieService(movie);
      });
    };
  };

  getMovieService(id:string):void {
    this._omdbService.getInfoMovie(id)
    .subscribe(data => this.movies.push(data));
  };

}

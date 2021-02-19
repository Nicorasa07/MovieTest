import { Component, OnInit } from '@angular/core';
import { OmdbService, Movie } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites:string[] = [];
  movies:Movie[] = [];

  constructor(private _omdbService: OmdbService) {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    if (this.favorites !== null) {
      this.favorites.forEach(movie => {
        this.viewMovie(movie);
      });
    };
  };

  viewMovie(id:string):void {
    this._omdbService.getMovie(id)
    .subscribe(data => {
      this.movies.push(data);
    });
  };

  ngOnInit():void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';
import { Movie } from 'src/app/models/movie.model';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  idMovie:string;
  movie:Movie;
  loading:boolean = true;
  addFavorite:boolean = false;

  constructor(private _activatedRoute: ActivatedRoute, private _omdbService: OmdbService) {
    this._activatedRoute.params.subscribe(params => {
      this.idMovie = params['id'];
    });
  };

  ngOnInit():void {
    this.getMovieService();
  };

  getMovieService():void {
    this._omdbService.getInfoMovie(this.idMovie)
    .subscribe(data => {
      this.movie = data;
      this.loading = false;
    });
  };

  saveMovie(id:string):void {
    let favorites:string[];
    if (localStorage.getItem('favorites') === null) {
      favorites = [];
    } else {
      favorites = JSON.parse(localStorage.getItem('favorites'));
    }
    const free = favorites.find(movie => movie === id);
    if (!free) favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.addFavorite = true;
  };

  closeMessage():void {
    this.addFavorite = false;
  };

}

import { Component, OnInit } from '@angular/core';
import { OmdbService, Movie } from 'src/app/services/omdb.service';
import SwiperCore, {Pagination, Autoplay} from 'swiper/core';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  movies:Movie[] = [];
  moviesArr:Movie[] = [];
  genreActive:string = '';
  genres:string[] = ['Drama', 'Adventure', 'Sci-Fi', 'Thriller'];

  constructor(private _omdbService: OmdbService) {
    this._omdbService.moviesList.forEach(movie => {
      this._omdbService.getMovies(movie)
      .subscribe(data => {
        this.movies.push(data);
      })
    });
    this.moviesArr = this.movies;
  };

  filterMovies(genre:string):void {
    const moviesCopy = this.movies.filter(movie => movie.Genre.indexOf(genre) >= 0);
    this.moviesArr = moviesCopy;
    this.genreActive = genre;
  }

  ngOnInit():void {
  }

}

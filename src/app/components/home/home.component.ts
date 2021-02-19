import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import SwiperCore, {Pagination} from 'swiper/core';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  moviesList:any[] = ['Inception', 'Venom', 'Avengers Endgame', 'Life of Pi', 'Godzilla', 'Thor', 'Greenland', 'The Martian', 'Deadpool', 'After', 'The Wolf of Wall Street', 'Blade Runner 2049', 'Joker', 'Avatar', 'The Social Network', 'The Imitation Game'];

  movies:any = [];
  moviesArr: any = [];
  genre:string = '';

  constructor(private _omdbService: OmdbService) {

    this.moviesList.forEach(movie => {
      this._omdbService.getMovies(movie)
      .subscribe(data => {
        this.movies.push(data);
      })
    })
    // console.log(this.movies);
    this.moviesArr = this.movies;
  }

  filterMovies(genre:string) {
    const moviesCopy = this.movies.filter(movie => movie.Genre.indexOf(genre) >= 0)
    this.moviesArr = moviesCopy;
    this.genre = genre;
  }

  ngOnInit(): void {
  }

}

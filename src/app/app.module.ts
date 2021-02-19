import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

// Routes
import { AppRoutingModule } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    FavoritesComponent,
    MovieComponent,
    LoadingComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieComponent } from './components/movie/movie.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { SeriesDetailsComponent } from './series/series-details/series-details.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies-movies/movie-details/movie-details.component';
import { SeriesComponent } from './series/series.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesMoviesComponent } from './movies-movies/movies-movies.component';
const routes: Routes = [
  {path: 'movies', component: MoviesMoviesComponent},
  {path: 'series', component: SeriesComponent},
  {path:'movie-details/:id' , component: MovieDetailsComponent},
  {path:'home', component:HomeComponent},
  {path: 'series-details/:id', component: SeriesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }

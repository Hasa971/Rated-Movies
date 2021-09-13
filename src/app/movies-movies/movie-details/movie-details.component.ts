import { MoviesService } from './../../Services/movies.service';
import { Movie, MovieList } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movies:MovieList = new MovieList;
  movie:Movie;
  id: number;

  MoviesService: any;
    constructor(private Movie:MoviesService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.Movie.getTopRatedMovies().subscribe((a:any) =>
    {
      this.movies = a;
      this.movie = this.movies.results.filter(x=>x.id == this.id)[0]
     }
     );
   };
   getSingleMoviesDetails(id){
    this.MoviesService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
    });
  }
}

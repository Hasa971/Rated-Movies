import { MovieList } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';


@Component({
  selector: 'app-movies-movies',
  templateUrl: './movies-movies.component.html',
  styleUrls: ['./movies-movies.component.css']
})
export class MoviesMoviesComponent implements OnInit {

  movie:MovieList = new MovieList;
 searchInputM;
moviefilter = [];

 constructor(private Movie:MoviesService) { }


 ngOnInit(): void {

   this.Movie.getTopRatedMovies().subscribe((a:any) =>
    {
      this.movie= a ,
      this.moviefilter = [...this.movie.results]
     }
     );

   };
   filterMovies(search:any){


       console.log(search.target.value,this.moviefilter)
     if(search.target.value.length> 2 ){
      this.moviefilter = this.movie.results.filter(x=> {return x.title.includes(search.target.value);})

     } else if (search.target.value.length == 0) {
       this.moviefilter = this.movie.results

   }


  };

 }


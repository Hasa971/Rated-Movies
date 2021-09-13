import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieList } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url1 = "https://api.themoviedb.org/3/movie/top_rated?api_key=33af7cfb22e76c3efc6a7757e7bcdb0d&language=en-US";





  constructor(private http: HttpClient) {}
  getTopRatedMovies():Observable<MovieList>{


    return this.http.get<MovieList>  (this.url1);




  }}

import { SeriesList } from './../models/series';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  results(results: any) {
    throw new Error('Method not implemented.');
  }

  private url = "https://api.themoviedb.org/3/tv/top_rated?api_key=33af7cfb22e76c3efc6a7757e7bcdb0d&language=en-US";




  constructor(private http: HttpClient) {}

  getTopRatedSeries():Observable<SeriesList>{

    return this.http.get<SeriesList>(this.url);


  }
}



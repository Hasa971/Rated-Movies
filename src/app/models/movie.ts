export class   MovieList {
  public id: number;
  public dates: Object;
  public page: number;
  public results: Array<Movie>;
  public total_pages: number;
  public total_results: number;
}

export class Movie {
  public adult: boolean;
  public backdrop_path: string;
  public genres: Array<string>;
  public homepage: string;
  public id: number;
  public imdb_id: string;
  public original_language: string;
  public original_title: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public production_companies: Array<string>;
  public production_countries: Array<string>   ;
  public release_date: string;
  public revenue: number;
  public runtime: number;
  public spoken_languages: Array<string>;
  public status: string;
  public tagline: string;
  public title: string;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;
}

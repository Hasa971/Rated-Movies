export class SeriesList{

  public id: number;
  public dates: string;
  public page: number;
  public results: Array<Series>;
  public total_pages: number;
  public total_results: number;
  public episode_number: number;
  public overview: string;
  public name:string;
  public poster_path:  string;



}



export class Series {
  public backdrop_path:  string;
  public created_by:  string;
  public episode_run_time:  Array<number>;
  public first_air_date:  string;
  public genres:  Array<string>;
  public id: number;
  public name:  string;
  public homepage:  string;
  public in_production:  boolean;
  public languages: Array<string>;
  public last_air_date:  string;
  public last_episode_to_air:  string;
  public air_date:  string;
  public episode_number: number;
  public overview:  string;
  public production_code:  string;
  public season_number: number;
  public still_path:  string;
  public vote_average:  number;
  public vote_count: number;
  public next_episode_to_air:  null;
  public networks:  Array<string>;
  public logo_path:  string;
  public origin_country:  string;
  public number_of_episodes: number;
  public original_language:  string;
  public original_name:  string;
  public popularity:  number;
  public poster_path:  string;
  public production_companies:  Array<string>;
  public production_countries:  Array<string>;
  public iso_3166_1:  string;
  public seasons:  Array<string>;
  public episode_count: number;
  public spoken_languages:Array<string>;
  public status:string;
  public tagline:string;
  public type:string;
  public vote_countnumber: number;





}

import { SeriesService } from './../../Services/series.service';
import { SeriesList } from './../../models/series';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  series:SeriesList = new SeriesList;
 searchInput;
seriefilter = [];


SeriesService: any;
constructor(private Series:SeriesService) { }

  ngOnInit(): void {
    this.Series.getTopRatedSeries().subscribe((a:any) =>
     {
       this.series= a ,
       this.seriefilter = [...this.series.results]
      }
      );

    };
    filterSeries(search:any){

      console.log(search.target.value,this.seriefilter)
      if(search.target.value.length> 2 ){
       this.seriefilter = this.series.results.filter(x=> {return x.name.includes(search.target.value);})

      } else if (search.target.value.length == 0) {
        this.seriefilter = this.series.results

    }


   };


  };

import { MatCardModule } from '@angular/material/card';
import { SeriesList } from './../models/series';
import { SeriesService } from './../Services/series.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']

})
export class SeriesComponent implements OnInit {
   series:SeriesList = new SeriesList;
  searchInput = "";
 seriesfilter = [];


  constructor(private Series:SeriesService) { }

  ngOnInit(): void {
    this.Series.getTopRatedSeries().subscribe((a:any) =>
     {
       this.series= a ,
       this.seriesfilter = [...this.series.results]
      }
      );

    };
    filterSeries(search:any){


        console.log(search.target.value,this.seriesfilter)
      if(search.target.value.length> 2 ){
       this.seriesfilter = this.series.results.filter(x=> {return x.name.includes(search.target.value);})

      } else if (search.target.value.length == 0) {
        this.seriesfilter = this.series.results

    }};
  }






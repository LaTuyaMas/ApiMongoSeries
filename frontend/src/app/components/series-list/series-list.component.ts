import {Component, OnInit} from '@angular/core';
import {Serie} from "../../common/serie";
import {SerieService} from "../../services/serie.service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit{

  series: Serie[] = [];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.listSeries();
  }

  listSeries(): void {
    this.serieService.getSerieList().subscribe(
      (data: any) => {
        this.series = data;
      }
    );
  }
}

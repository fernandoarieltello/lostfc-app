import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  dataTable: any
  Shooters:any
  constructor(private apiStatistics: StatisticsService) { }

  ngOnInit() {
    this.apiStatistics.getTable().subscribe( respuesta => { 
      console.log("respuesta:", respuesta)
      this.dataTable = respuesta
    })
    this.apiStatistics.getStriker().subscribe( respuesta => { 
      this.Shooters = respuesta
    })
  }
  

}

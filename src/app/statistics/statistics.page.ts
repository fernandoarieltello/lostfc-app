import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  dataTable: any
  strikers: any
  selectedSegment = 'tabla'
  successTable = true

  constructor(private apiStatistics: StatisticsService) { }

  ngOnInit() {
    this.apiStatistics.getTable().subscribe( respuesta => {
      console.log("[getTable] respuesta: ", respuesta)
      this.dataTable = respuesta
    }, err => {
      console.log("Esto es un errro: ", err)
      this.successTable = false
    })

    this.apiStatistics.getStriker().subscribe(respuesta => {
      console.log("[getStriker] respuesta: ", respuesta)
      this.strikers = respuesta
    })
  }

  changeSegment(){
    console.log("Segmento seleccionado:", this.selectedSegment)
  }

}

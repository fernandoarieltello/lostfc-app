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
  selectedSegment: String = 'tabla'
  successTable: Boolean = true
  successStrikers: Boolean = true

  constructor(private apiStatistics: StatisticsService) { }

  ngOnInit() {
    this.apiStatistics.getTable().subscribe( response => {
      console.log('response of getTable() from Statistics Service:', response)
      this.dataTable = response
    }, err => {
      console.log('Error:', err)
      this.successTable = false
    })

    this.apiStatistics.getStriker().subscribe( response => {
      console.log('response of getStriker() from Statistics Service:', response)
      this.strikers = response
    }, err => {
      console.log('Error:', err)
      this.successStrikers = false
    })
  }

  changeSegment() {
    console.log('selectedSegment', this.selectedSegment)
  }

}

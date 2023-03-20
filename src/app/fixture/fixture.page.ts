import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.page.html',
  styleUrls: ['./fixture.page.scss'],
})
export class FixturePage implements OnInit {

  teams = [
    {name: "Lost FC"},
    {name: "VINOZUELA"},
    {name: "C.A. DECADENTE"}
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public data = [
    {"Framework": "Tanger", "Stars": "166443", "Released": "2014"},
    {"Framework": "Rabat", "Stars": "150793", "Released": "2013"},
    {"Framework": "Casablanca", "Stars": "62342", "Released": "2016"},
    {"Framework": "Fes", "Stars": "27647", "Released": "2010"},
    {"Framework": "Marrakesh", "Stars": "21471", "Released": "2011"},
  ];

  selectedValue: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

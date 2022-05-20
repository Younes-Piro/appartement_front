import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Rabat', weight: '600.000 DH', symbol: '80 m²'},
  {position: 2, name: 'Tanger', weight: '750.000 DH', symbol: '78 m²'},
  {position: 3, name: 'Casablanca', weight: '890.000 DH', symbol: '71 m²'},
  {position: 4, name: 'Fes', weight: '800.000 DH', symbol: '70 m²'},
  {position: 5, name: 'Marrakesh', weight: '130.000 DH', symbol: '81 m²'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'City', 'Price', 'Surface'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

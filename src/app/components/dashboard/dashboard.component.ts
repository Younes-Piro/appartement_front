import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  /* bar chart Data*/
  public data = [
    {"Framework": "Tanger", "Stars": "166443", "Released": "2014"},
    {"Framework": "Rabat", "Stars": "150793", "Released": "2013"},
    {"Framework": "Casablanca", "Stars": "62342", "Released": "2016"},
    {"Framework": "Fes", "Stars": "27647", "Released": "2010"},
    {"Framework": "Marrakesh", "Stars": "21471", "Released": "2011"},
  ];

  // table data
  displayedColumns: string[] = ['position', 'City', 'Price', 'Surface'];
  dataSource = ELEMENT_DATA;


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: `Card 1`, cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title:`<app-table></app-table>`, cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

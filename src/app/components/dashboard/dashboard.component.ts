import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {
  Dictionary,
  Grouping_CityDocument,
  Grouping_CityGQL,
} from 'src/generated-types';
import { Apollo } from 'apollo-angular';

class dataObject {
  name: any;
  position: any;
  weight: any;
  symbol: any;
  constructor(name: any, position: any, weight: any, symbol: any) {
    this.name = name;
    this.position = position;
    this.weight = weight;
    this.symbol = symbol;
  }
  getObject() {
    return {
      name: this.name,
      position: this.position,
      weight: this.weight,
      symbol: this.symbol,
    };
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const fromDb = undefined;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cards_values: Dictionary[] = [];
  load: boolean = true;

  //table
  ELEMENT_DATA: PeriodicElement[] = fromDb || [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly grouping_CityGQL: Grouping_CityGQL,
    private apollo: Apollo
  ) {}

  /* bar chart Data*/
  public data5 = [
    { Framework: 'Tanger', Stars: '166443', Released: '2014' },
    { Framework: 'Rabat', Stars: '150793', Released: '2013' },
    { Framework: 'Casablanca', Stars: '62342', Released: '2016' },
    { Framework: 'Fes', Stars: '27647', Released: '2010' },
    { Framework: 'Marrakesh', Stars: '21471', Released: '2011' },
  ];

  // table data
  displayedColumns: string[] = ['position', 'City', 'Price', 'Surface'];
  dataSource: PeriodicElement[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: `Card 1`, cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: `<app-table></app-table>`, cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: Grouping_CityDocument,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.load = loading;
        this.cards_values = data.detailsGrouping;
        console.log(data);
        this.cards_values.map((single_value, index) => {
          const object = new dataObject(
            index,
            String(single_value?.key),
            String(single_value.value?.txt1),
            String(single_value.value?.txt2)
          );

          this.ELEMENT_DATA[index] = object.getObject();
          console.log('ELEMENT DATA' + this.ELEMENT_DATA[index].name);
        });
        // console.log(this.ELEMENT_DATA);
        this.dataSource = this.ELEMENT_DATA;
        console.log(this.dataSource);
      });
  }
}

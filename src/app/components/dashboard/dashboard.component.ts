import { Component } from '@angular/core';
import {
  Dictionary,
  Grouping_CityDocument,
  Grouping_CityGQL,
  Total_Count_RoomsDocument,
  Total_Count_RoomsGQL,
} from 'src/generated-types';

import { Apollo } from 'apollo-angular';
import { dataObject } from 'src/app/class/dataObject.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cards_values: Dictionary[] = [];
  count_rooms: Dictionary[] = [];
  rooms_values: number[] = [];
  rooms_number: number[] = [];

  load: boolean = true;

  constructor(
    private readonly groupingCityGQL: Grouping_CityGQL,
    private apollo: Apollo,
    private readonly totalCountRoomsGQL: Total_Count_RoomsGQL
  ) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: Total_Count_RoomsDocument,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        data.numberRoomsCount.map((singleRoom: any) => {
          const {
            key,
            value: { txt1 },
          } = singleRoom;
          this.rooms_number.push(key);
          this.rooms_values.push(txt1);
        });
      });
    console.log(this.rooms_number);
    console.log(this.rooms_values);

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
        });
      });
  }
}

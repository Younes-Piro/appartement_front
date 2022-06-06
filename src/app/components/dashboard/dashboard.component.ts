import { Component } from '@angular/core';
import {
  Dictionary,
  Grouping_CityDocument,
  Grouping_CityGQL,
  Total_Count_RoomsDocument,
  Total_Count_RoomsGQL,
  Surface_DistributionDocument,
  EveryCityNumRoomsDocument,
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

  surface_values: number[] = [];
  surface_number: number[] = [];

  distinc_city_rooms_values: number[] = [];
  distinc_city_rooms_number: number[] = [];

  selectedValue: string = 'Tanger';
  cities: any[] = [
    { value: 'Tanger', viewValue: 'Tanger' },
    { value: 'Marrakech', viewValue: 'Marrakech' },
    { value: 'Agadir', viewValue: 'Agadir' },
    { value: 'Casablanca', viewValue: 'Casablanca' },
    { value: 'Fès', viewValue: 'Fès' },
    { value: 'Rabat', viewValue: 'Rabat' },
  ];
  load: boolean = true;
  displayedColumns: string[] = [
    'position',
    'City',
    'Number of rooms',
    'Surface',
  ];
  ELEMENT_DATA: any[] = [];
  dataSource: any[] = [];

  constructor(
    private readonly groupingCityGQL: Grouping_CityGQL,
    private apollo: Apollo,
    private readonly totalCountRoomsGQL: Total_Count_RoomsGQL
  ) {}

  ngOnInit(): void {
    // count rooms
    this.apollo
      .watchQuery<any>({
        query: Surface_DistributionDocument,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        data.surfaceDistribution.map((surface: any) => {
          const {
            key,
            value: { txt1 },
          } = surface;
          this.surface_number.push(key);
          this.surface_values.push(txt1);
        });
      });

    console.log(this.surface_values);

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

    // implements table
    this.apollo
      .watchQuery<any>({
        query: Grouping_CityDocument,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.load = loading;
        this.cards_values = data.detailsGrouping;

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
      });

    //every city
    this.apollo
      .watchQuery<any>({
        query: EveryCityNumRoomsDocument,
        variables: { city: this.selectedValue },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(data);
        data.everyCityNumRooms.map((singleRoom: any) => {
          const {
            key,
            value: { txt1 },
          } = singleRoom;
          this.distinc_city_rooms_number.push(key);
          this.distinc_city_rooms_values.push(txt1);
        });
      });
  }
  onChangeCity() {
    this.apollo
      .watchQuery<any>({
        query: EveryCityNumRoomsDocument,
        variables: { city: this.selectedValue },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.distinc_city_rooms_number = [];
        this.distinc_city_rooms_values = [];
        console.log(data);
        data.everyCityNumRooms.map((singleRoom: any) => {
          const {
            key,
            value: { txt1 },
          } = singleRoom;
          this.distinc_city_rooms_number.push(key);
          this.distinc_city_rooms_values.push(txt1);
        });
        console.log(this.distinc_city_rooms_number);
      });
  }
}

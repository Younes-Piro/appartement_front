import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Dictionary,
  Cards_ValuesGQL,
  Cards_ValuesDocument,
} from 'src/generated-types';

@Component({
  selector: 'app-header-stats',
  templateUrl: './header-stats.component.html',
  styleUrls: ['./header-stats.component.scss'],
})
export class HeaderStatsComponent implements OnInit {
  cards_values: Dictionary[] = [];
  load: boolean = true;
  keys: string[] = [];
  values: number[] = [];

  constructor(
    private readonly cards_ValuesGQL: Cards_ValuesGQL,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: Cards_ValuesDocument,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.load = loading;
        this.cards_values = data.cards;
        this.cards_values.map((single_value: any) => {
          this.keys.push(single_value.key);
          this.values.push(parseInt(single_value.value.txt1));
        });
      });
  }
}

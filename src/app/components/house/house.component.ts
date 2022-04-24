import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-angular/http';

//query
const HouseQuery = gql`
  query all_appartements{
  allAppartements{
    id
    price
  }
}
`;

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  appartements : any[] = []
  loading = true
  error : any

  constructor(private apollo:Apollo,
    HttpLink:HttpLink) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: HouseQuery
    }).valueChanges.subscribe(
      (result: any) => {
        this.appartements = result?.data?.allAppartements;
        this.loading = result.loading;
        this.error = result.error;
      }
    )
  }

}

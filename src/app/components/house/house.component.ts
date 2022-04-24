import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-angular/http';
import { All_AppartementsGQL, AppartementsType } from 'src/generated-types';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  appartements ?: Observable<AppartementsType[]>;

  constructor(private readonly all_AppartementsGQL: All_AppartementsGQL) { }

  ngOnInit(): void {
    this.appartements = this.all_AppartementsGQL.watch()
    .valueChanges.pipe(map((result : any) => result?.data?.allAppartements));
    }
  }


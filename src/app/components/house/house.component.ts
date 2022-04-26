import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { All_AppartementsGQL, AppartementsType, All_AppartementsDocument} from 'src/generated-types';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  appartements : AppartementsType[] = [];

  constructor(
    private readonly all_AppartementsGQL: All_AppartementsGQL,
    private apollo:Apollo
  ){}

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query:All_AppartementsDocument 
      
    }).valueChanges.subscribe(
     
      ({data,loading}) =>{
        console.log(loading);
        this.appartements=data.allAppartements;
      } )
  }
  }


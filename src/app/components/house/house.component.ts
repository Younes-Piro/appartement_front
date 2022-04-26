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
  load: boolean = true
  length?:number;
  pageSize:number = 9;
  pageSizeOptions: number[] = [9, 27, 54, 90];
  page:number=1


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
        this.load = loading
        this.appartements=data.allAppartements;
        this.length = this.appartements.length
      } )
  }
  }


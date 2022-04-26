import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { All_AppartementsGQL, AppartementsType, All_AppartementsDocument} from 'src/generated-types';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  appartements : AppartementsType[] = [];
  load: boolean = true
  length?:number;
  pageSize:number = 8;
  pageSizeOptions: number[] = [8, 40, 80, 120];
  page:number=1


  constructor(
    private readonly all_AppartementsGQL: All_AppartementsGQL,
    private apollo:Apollo
  ){}
  onPageChange(event: PageEvent){
    console.log(event)
    this.page = event.pageIndex+1
    this.pageSize = event.pageSize
  }
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


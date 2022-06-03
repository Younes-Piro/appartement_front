import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  All_AppartementsGQL,
  AppartementsType,
  All_AppartementsDocument,
} from 'src/generated-types';
import { PageEvent } from '@angular/material/paginator';
// import { ElasticsearchService } from 'src/app/services/elasticsearch.service';
import { ContentSource } from 'src/app/model/contentSource.model';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  appartements: AppartementsType[] = [];
  load: boolean = true;
  length?: number;
  pageSize: number = 8;
  pageSizeOptions: number[] = [8, 40, 80, 120];
  page: number = 1;
  isConnected = false;
  status?: string;
  cont: any = {
    title: '',
    content: '',
  };
  queryText: string = '';
  contentSources: ContentSource[] = [];
  lastKeypress = 0;

  constructor(
    private readonly all_AppartementsGQL: All_AppartementsGQL,
    private apollo: Apollo,
    // private es: ElasticsearchService,
    private cd: ChangeDetectorRef
  ) {
    this.isConnected = false;
  }
  onPageChange(event: PageEvent) {
    console.log(event);
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
  ngOnInit(): void {
    //graphql
    this.apollo
      .watchQuery<any>({
        query: All_AppartementsDocument,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.load = loading;
        this.appartements = data.allAppartements;
        this.length = this.appartements.length;
      });
  }

  // search($event: any) {
  //   if ($event.timeStamp - this.lastKeypress > 100) {
  //     this.queryText = $event.target.value;

  //     this.queryText = $event.target.value;

  //     this.es
  //       .fullTextSearch('news', '_doc', 'content', this.queryText)
  //       .then(
  //         (response: any) => {
  //           this.contentSources = response.hits.hits;
  //           console.log(response);
  //         },
  //         (error: any) => {
  //           console.error(error);
  //           console.error('erreur');
  //         }
  //       )
  //       .then(() => {
  //         console.log('Search Completed!');
  //       });
  //   }
  //   this.lastKeypress = $event.timeStamp;
  // }
}

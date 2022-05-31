import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { InnerItem, Dictionary} from 'src/generated-types';

@Component({
  selector: 'app-header-stats',
  templateUrl: './header-stats.component.html',
  styleUrls: ['./header-stats.component.scss']
})
export class HeaderStatsComponent implements OnInit {

  appartements : Dictionary[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent implements OnInit {
  @Input() colspan ?:number
  @Input() rowspan ?:number

  constructor() { }

  ngOnInit(): void {
  }

}

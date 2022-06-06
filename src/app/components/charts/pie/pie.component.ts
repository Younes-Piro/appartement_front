import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit, OnChanges {
  @Input() values?: any;
  @Input() labels?: any;
  title?: string;
  graph2?: any = {};
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'dynamic-plots';
      // Bar Chart
      this.graph2 = {
        data: [
          {
            values: [...this.values[0]],
            labels: [...this.labels[0]],
            type: 'pie',
          },
        ],
        layout: { title: 'top 5 must number of rooms' },
      };
    }, 2000);
  }

  ngOnChanges() {
    // create header using child_id
    setTimeout(() => {
      this.title = 'dynamic-plots';
      // Bar Chart
      this.graph2 = {
        data: [
          {
            values: [...this.values[0]],
            labels: [...this.labels[0]],
            type: 'pie',
          },
        ],
        layout: { title: 'top 5 must number of rooms' },
      };
    }, 500);
  }
}

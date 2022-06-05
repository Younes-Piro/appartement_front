import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {
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
        layout: { title: 'Some Data to Hover Over' },
      };
    }, 500);
  }
}

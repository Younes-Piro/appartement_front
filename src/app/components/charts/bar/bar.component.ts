import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  @Input() values?: any;
  @Input() labels?: any;
  title?: string;
  graph?: any = {};

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'dynamic-plots';
      // Bar Chart
      this.graph = {
        data: [
          {
            x: [...this.labels[0]],
            y: [...this.values[0]],
            type: 'bar',
            // orientation: 'h',
          },
        ],
        layout: { title: 'distribution of surface' },
      };
    }, 1000);
  }
}

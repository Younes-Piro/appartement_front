import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  title = 'dynamic-plots';
  // Bar Chart
  graph = {
    data: [
      {
        x: [1, 2, 3],
        y: [2, 3, 4],
        type: 'bar',
      },
    ],
    layout: { title: 'Some Data to Hover Over' },
  };

  constructor() {}

  ngOnInit(): void {}
}

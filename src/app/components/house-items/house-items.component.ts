import { Component, OnInit, Input} from '@angular/core';
import { AppartementsType} from 'src/generated-types';


@Component({
  selector: 'app-house-items',
  templateUrl: './house-items.component.html',
  styleUrls: ['./house-items.component.scss']
})
export class HouseItemsComponent implements OnInit {

  @Input() appartement ?: AppartementsType;
  constructor() { }

  ngOnInit(): void {
  }

}

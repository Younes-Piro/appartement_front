import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public stylingService: StylingService) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {}

  testo(text:String){
    console.log(text);
  }


}

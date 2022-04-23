import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public stylingService: StylingService) { }

  test : boolean = true
  
  ngOnInit(): void {
  }

}

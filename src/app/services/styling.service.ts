import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';

@Injectable({
  providedIn: 'root'
})
export class StylingService {
  isDarkTheme : boolean = false

  toggleIsDarkTheme(){
    console.log(this.isDarkTheme);

    this.isDarkTheme = !this.isDarkTheme
    console.log(this.isDarkTheme);
    
  }

  constructor() { }
}

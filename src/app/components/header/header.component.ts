import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

    my_route ?: string

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,
      private router: Router  ) {

      }

    
    ngOnInit(): void {
      this.router.events.subscribe(
        (val ?: any) => {
          console.log(val)
        }
      )
      console.log(this.router.url)
    }


}

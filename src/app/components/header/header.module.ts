import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }

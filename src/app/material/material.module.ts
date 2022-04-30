import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';



const MaterialComponents = [
  MatToolbarModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatListModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatTableModule,
  MatDividerModule,
  MatFormFieldModule,
  MatOptionModule
]


@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }

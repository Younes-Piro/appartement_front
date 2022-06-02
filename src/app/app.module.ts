import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'
import { HeaderComponent } from './components/header/header.component';
import { HouseComponent } from './components/house/house.component';
import { HomeComponent } from './components/home/home.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HouseItemsComponent } from './components/house-items/house-items.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { PieComponent } from './components/charts/pie/pie.component';
import { PlotComponent } from './components/charts/plot/plot.component';
import { TableComponent } from './components/charts/table/table.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderStatsComponent } from './components/header-stats/header-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HouseComponent,
    HomeComponent,
    HouseItemsComponent,
    DashboardComponent,
    BarComponent,
    PieComponent,
    PlotComponent,
    TableComponent,
    HeaderStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    GraphQLModule,
    HttpClientModule,
    NgxPaginationModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

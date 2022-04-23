import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path: 'house', component: HouseComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

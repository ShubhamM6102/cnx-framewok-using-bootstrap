import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent

  },
  {
    path:"dashboard",
    component:  DashboardComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

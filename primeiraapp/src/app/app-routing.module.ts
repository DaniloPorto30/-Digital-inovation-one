import { AboutComponent } from './Frontend/template/about/about.component';
import { HomeComponent } from './Frontend/template/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeustepperComponent } from './Frontend/template/meustepper/meustepper.component'

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'meustepper',
    component: MeustepperComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

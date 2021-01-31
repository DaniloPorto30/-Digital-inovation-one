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
    path:'../app/Frontend/template/meustepper',
    component: MeustepperComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

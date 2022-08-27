import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMovisComponent } from './all-movis/all-movis.component';
import { MovisComponent } from './movis/movis.component';
import { UpcommingMoviComponent } from './upcomming-movi/upcomming-movi.component';
const routes: Routes = [
  {path:'',redirectTo:'/allmovi',pathMatch: 'full'},
  {path:'allmovi',component:AllMovisComponent},
  {path:'movis/:id',component:MovisComponent},
  {path:'upcomming',component:UpcommingMoviComponent},
  { path: '**', redirectTo: '/allmovi' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

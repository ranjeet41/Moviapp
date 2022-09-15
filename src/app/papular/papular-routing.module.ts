import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviDataComponent } from './movi-data/movi-data.component';
const routes: Routes = [
{path:'movidata',component:MoviDataComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapularRoutingModule { }

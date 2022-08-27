import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MovisComponent } from './movis/movis.component';
import { AllMovisComponent } from './all-movis/all-movis.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { PaginationDirective } from '../directive/pagination.directive';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpcommingMoviComponent } from './upcomming-movi/upcomming-movi.component';



@NgModule({
  declarations: [
    MovisComponent,
    AllMovisComponent,
    PaginationDirective,
    SearchComponent,
    UpcommingMoviComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule,
    MatProgressSpinnerModule,
  ]
})
export class AdminModule { }

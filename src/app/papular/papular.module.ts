import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PapularRoutingModule } from './papular-routing.module';
import { MoviDataComponent } from './movi-data/movi-data.component';


@NgModule({
  declarations: [
    MoviDataComponent
  ],
  imports: [
    CommonModule,
    PapularRoutingModule
  ]
})
export class PapularModule { }

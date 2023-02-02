import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { HabilidadesRoutingModule } from './habilidades-routing.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    HabilidadesRoutingModule,
    SharedModule
  ]
})
export class HabilidadesModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ProyectodRoutingModule } from './proyectod-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PageListComponent,
    ProyectodRoutingModule
  ]
})
export class ProyectodModule { }

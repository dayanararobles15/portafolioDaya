import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { AcercaRoutingModule } from './acerca-routing.module';



@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    AcercaRoutingModule,
    SharedModule
  ]
})
export class AcercaModule { }

import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./habilidades/habilidades.module').then((m) => m.HabilidadesModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./acerca/acerca.module').then((m) => m.AcercaModule)
  },

  {
    path: 'proyect',
    loadChildren: () => import('./proyectod/proyectod.module').then((m) => m.ProyectodModule)
  },


  {
    path: 'contact',
    loadChildren: () => import('./contacto/contacto.module').then((m) => m.ContactoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }),],

  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';

export interface IMenu{
  title: string
  url: string
  icon:string
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[] = [
    {title:'Inicio', url:'/dashboard',icon:'tablero'},
    {title:'Acerca de', url:'/about',icon:'sobre'},
    {title:'Proyecto', url:'/proyect',icon:'projects'},
    {title:'Conocimientos', url:'/skills',icon:'skill'},
    {title:'Contacto', url:'/contact',icon:'contacto'}

  ]

  constructor() { }

  getMenu(): IMenu[]{
    return [...this.listMenu]
  }

  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(
    (menu)=>menu.url.toLowerCase()==url.toLocaleLowerCase()
  ) as IMenu
}
}

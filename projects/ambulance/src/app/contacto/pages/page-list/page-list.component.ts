import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataUsers:any[] = [
    {id:1, name:'Luis', area:'Contabilidad'},
    {id:2, name:'Carla', area:'RRHH'},
    {id:3, name:'Fernanda', area:'Asistencia Social'},
    {id:4, name:'Luis', area:'Contabilidad'},
    {id:5, name:'Carla', area:'RRHH'},
    {id:6, name:'Fernanda', area:'Asistencia Social'},
    {id:7, name:'Luis', area:'Contabilidad'},
    {id:8, name:'Carla', area:'RRHH'},
    {id:9, name:'Fernanda', area:'Asistencia Social'},
    {id:10, name:'Luis', area:'Contabilidad'},
    {id:11, name:'Carla', area:'RRHH'},
    {id:12, name:'Fernanda', area:'Asistencia Social'},
    {id:13, name:'Luis', area:'Contabilidad'},
    {id:14, name:'Carla', area:'RRHH'},
    {id:15, name:'Fernanda', area:'Asistencia Social'},
    {id:16, name:'Luis', area:'Contabilidad'},
    {id:17, name:'Carla', area:'RRHH'},
    {id:18, name:'Fernanda', area:'Asistencia Social'},
    {id:19, name:'Luis', area:'Contabilidad'},
    {id:20, name:'Carla', area:'RRHH'},
    {id:21, name:'Fernanda', area:'Asistencia Social'},
    {id:22, name:'Luis', area:'Contabilidad'},
    {id:23, name:'Carla', area:'RRHH'},
    {id:24, name:'Fernanda', area:'Asistencia Social'},
    {id:25, name:'Luis', area:'Contabilidad'},
    {id:26, name:'Carla', area:'RRHH'},
    {id:27, name:'Fernanda', area:'Asistencia Social'},
    {id:28, name:'Luis', area:'Contabilidad'},
    {id:29, name:'Carla', area:'RRHH'},
    {id:30, name:'Fernanda', area:'Asistencia Social'},
    {id:31, name:'Luis', area:'Contabilidad'},
    {id:32, name:'Carla', area:'RRHH'},
    {id:33, name:'Fernanda', area:'Asistencia Social'},
    {id:34, name:'Luis', area:'Contabilidad'},
    {id:35, name:'Carla', area:'RRHH'},
   
  ]

  listFieldsUsers:string[] = ['id','name','area']
  metaDataColumns:MetaDataColumn[] = [
    {field: 'id', title:'ID'},
    {field: 'name', title:'USUARIO'},
    {field: 'area', title:'AREA DE TRABAJO'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

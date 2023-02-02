import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
    data:any[] = [
    {id:1, name:'Luis', license:'123'},
    {id:2, name:'Carla', license:'456'},
    {id:3, name:'Fernanda', license:'789'},
    {id:4, name:'Pablo', license:'246'},
    {id:5, name:'Jorge', license:'135'},
  ]

  listFields:string[] = ['id','name','license']
  metaDataColumns:MetaDataColumn[] = [
    {field: 'id', title:'ID'},
    {field: 'name', title:'CONDUCTOR'},
    {field: 'license', title:'LICENCIA'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

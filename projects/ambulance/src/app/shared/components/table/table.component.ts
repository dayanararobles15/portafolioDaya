import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';

interface IData{
  id:number
  name:string
}

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data:any
  //@Input() listFields!:string[]
  @Input() metaDataColumns!:MetaDataColumn[]

  // data:IData[] = [
  //   {id:1, name:'Luis'},
  //   {id:2, name:'Carla'},
  //   {id:3, name:'Fernanda'},
  //   {id:4, name:'Pablo'},
  //   {id:5, name:'Jorge'},
  // ]

  listFields:string[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['metaDataColumns'])
    {
      this.listFields = this.metaDataColumns.map((x) => x.field)
    }
  }

}
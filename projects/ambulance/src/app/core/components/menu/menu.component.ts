import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from '../../../helpers/services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listMenu: IMenu[]
  expanded = true
@Output() onToggleExpanded:EventEmitter<boolean>=new EventEmitter<boolean>()

  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getMenu()
  }

  ngOnInit(): void {
  }
 
toggleExpanded(){
  this.expanded= !this.expanded
  this.onToggleExpanded.emit(this.expanded)
}

}

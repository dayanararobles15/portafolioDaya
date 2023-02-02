import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon {
  name: string
  path: string
}
@Injectable({
  providedIn: 'root'
})
export class IconService {
  private listIcons: IIcon[] = [
    { name: 'projects', path: '../assets/icons/projects.svg' },
    { name: 'sobre', path: '../assets/icons/about.svg' },
    { name: 'skill', path: '../assets/icons/skill.svg' },
    { name: 'contacto', path: '../assets/icons/contact.svg' },
    { name: 'tablero', path: '../assets/icons/dashboard.svg' }
  ]
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.registryIcons()
    }
    registryIcons(){
      this.listIcons.forEach((icon) => {
        this.matIconRegistry.addSvgIcon(
          icon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path),
          )
      })
    }
}


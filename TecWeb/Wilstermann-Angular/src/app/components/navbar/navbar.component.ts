import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(){
  }
  selectedItem: string | null = null;
  
  selectItem(item: string) {
    this.selectedItem = item;
  }

  datosMenu=[
    {
      'titulo': 'Noticias',
      'url':'noticias'
    },
    {
      'titulo': 'Equipo Masculino',
      'url':'equipomasculino'
    },
    {
      'titulo': 'Equipo Femenino',
      'url':'femenino'
    },
    {
      'titulo': 'Partidos',
      'url':'partidos'
    },
    {
      'titulo': 'Historia',
      'url':'historia'
    },
    {
      'titulo': 'Barra',
      'url':'barra'
    }
  ];
}

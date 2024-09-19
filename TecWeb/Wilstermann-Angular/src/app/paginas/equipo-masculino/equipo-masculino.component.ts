import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/servicios/image-service.service';
import { TablaJugadoresServiceService } from 'src/app/servicios/tabla-jugadores-service.service';

@Component({
  selector: 'app-equipo-masculino',
  templateUrl: './equipo-masculino.component.html',
  styleUrls: ['./equipo-masculino.component.scss']
})

export class EquipoMasculinoComponent {
  datosTabla: any[] = [];
  equipo1: SafeResourceUrl;
  equipo2: SafeResourceUrl;
  equipo3: SafeResourceUrl;
  entrenamiento: SafeResourceUrl;
  diaz: SafeResourceUrl;

  constructor(private imageService: ImageService, private tablaService: TablaJugadoresServiceService) {
    this.equipo1 = this.imageService.getEquipo1Image();
    this.equipo2 = this.imageService.getEquipo2Image();
    this.equipo3 = this.imageService.getEquipo3Image();
    this.entrenamiento = this.imageService.getEntrenamientoImage();
    this.diaz = this.imageService.getDiazImage();
  }

  ngOnInit(): void {
    this.tablaService.getDatosTabla().subscribe(data => {
      this.datosTabla = data;
    });
  }
}

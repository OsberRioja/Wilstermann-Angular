import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/servicios/image-service.service';
import { TablaJugadoresServiceService } from 'src/app/servicios/tabla-jugadores-service.service';

@Component({
  selector: 'app-femenino',
  templateUrl: './femenino.component.html',
  styleUrls: ['./femenino.component.scss']
})
export class FemeninoComponent {
  datosTabla: any[] = [];
  equipo: SafeResourceUrl;
  jugadora1: SafeResourceUrl;
  jugadora2: SafeResourceUrl;
  jugadora3: SafeResourceUrl;

  constructor(private imageService: ImageService, private tablaService: TablaJugadoresServiceService) {
    this.equipo = this.imageService.getEquipoFImage();
    this.jugadora1 = this.imageService.getJugadora1Image();
    this.jugadora2 = this.imageService.getJugadora2Image();
    this.jugadora3 = this.imageService.getJugadora3Image();
  }

  ngOnInit(): void {
    this.tablaService.getDatosTablaF().subscribe(data => {
      this.datosTabla = data;
    });
  }
}

import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PosicionesServiceService } from 'src/app/servicios/posiciones-service.service';
import { ImageService } from 'src/app/servicios/image-service.service';
@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.scss']
})
export class PartidosComponent {
  datosTabla: any[] = [];
  escudo_dorado: SafeResourceUrl;
  constructor(private tablaService: PosicionesServiceService, private imageService: ImageService){
    this.escudo_dorado=this.imageService.getEscudoDorado();
  }
  ngOnInit(): void {
    this.tablaService.getDatosTabla().subscribe(data => {
      this.datosTabla = data;
    });
  }
}

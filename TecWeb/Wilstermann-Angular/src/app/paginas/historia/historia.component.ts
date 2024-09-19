import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/servicios/image-service.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {
  cuestion: SafeResourceUrl;
  lab1: SafeResourceUrl;
  lab2: SafeResourceUrl;
  escudo_normal: SafeResourceUrl;
  Tresescudos: SafeResourceUrl;

  constructor(private imageService: ImageService) {
    this.cuestion = this.imageService.getCuestionDeOrgulloImage();
    this.lab1 = this.imageService.getLab1Image();
    this.lab2 = this.imageService.getLab2Image();
    this.escudo_normal=this.imageService.getEscudoNormalImage();
    this.Tresescudos=this.imageService.getTresEscudosImage();
  }
}

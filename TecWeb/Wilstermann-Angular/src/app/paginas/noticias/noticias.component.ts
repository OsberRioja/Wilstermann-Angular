import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/servicios/image-service.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
  comunicado: SafeResourceUrl;
  noticia1: SafeResourceUrl;
  noticia2: SafeResourceUrl;

  constructor(private imageService: ImageService) {
    this.comunicado = this.imageService.getComunicadoImage();
    this.noticia1 = this.imageService.getNoticia1Image();
    this.noticia2 = this.imageService.getNoticia2Image();
  }
}

import { Component } from '@angular/core';
import { ImageService } from 'src/app/servicios/image-service.service';
import { SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent {
  Gurkas1: SafeResourceUrl;
  Gurkas2: SafeResourceUrl;
  Gurkas3: SafeResourceUrl;
  Gurkas4: SafeResourceUrl;
  Gurkas5: SafeResourceUrl;
  Gurkas6: SafeResourceUrl;
  GurkasP: SafeResourceUrl;
  escudo_normal: SafeResourceUrl;

  constructor(private imageService: ImageService){
    this.Gurkas1=this.imageService.getGurkas1Image();
    this.Gurkas2=this.imageService.getGurkas2Image();
    this.Gurkas3=this.imageService.getGurkas3Image();
    this.Gurkas4=this.imageService.getGurkas4Image();
    this.Gurkas5=this.imageService.getGurkas5Image();
    this.Gurkas6=this.imageService.getGurkas6Image();
    this.GurkasP=this.imageService.getGurkasPImage();
    this.escudo_normal=this.imageService.getEscudoNormalImage();
  }

}

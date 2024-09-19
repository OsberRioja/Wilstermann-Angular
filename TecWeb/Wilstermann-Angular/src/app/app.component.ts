import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wilstermann-Angular';
  constructor(private sanitizer: DomSanitizer) { }
  imagenUrl: any;
  ngOnInit() {
    const rutaImagen = 'assets/imagenes/escudos/escudo_fondo_rojo.png'; // Ruta de la imagen relativa a la carpeta de assets
    this.imagenUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
}

import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private sanitizer: DomSanitizer) { }

  getComunicadoImage(): SafeResourceUrl {
    const rutaImagenCom = 'assets/imagenes/Noticias/comunicado.jpeg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenCom);
  }

  getNoticia1Image(): SafeResourceUrl {
    const rutaImagenNot1 = 'assets/imagenes/Noticias/imagen1.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot1);
  }

  getNoticia2Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Noticias/noticia2.png';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }

  getEquipo1Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Masculino/equipo1.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }

  getEquipo2Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Masculino/equipo2.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getEquipo3Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Masculino/equipo3.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }

  getEntrenamientoImage(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Masculino/entrenamiento1.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getDiazImage(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Masculino/diaz.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getEquipoFImage(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Femenino/equipo.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getJugadora1Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Femenino/jugadora1.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getJugadora2Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Femenino/jugadora2.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getJugadora3Image(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/Femenino/jugadora3.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getCuestionDeOrgulloImage(): SafeResourceUrl {
    const rutaImagenNot2 = 'assets/imagenes/escudos/cuestion_de_orgullo.png';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagenNot2);
  }
  getLab1Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/escudos/lab1.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getLab2Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/escudos/lab2.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getEscudoNormalImage(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/escudos/escudo_normal.png';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getTresEscudosImage(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/escudos/3escudos.png';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkas1Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/Gurkas1.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkas2Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/Gurkas2.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkas3Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/Gurkas3.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkas4Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/Gurkas4.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkas5Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/Gurkas5.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkas6Image(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/Gurkas6.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getGurkasPImage(): SafeResourceUrl {
    const rutaImagen = 'assets/imagenes/Barra/GurkasP.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
  getEscudoDorado():SafeResourceUrl{
    const rutaImagen = 'assets/imagenes/escudos/escudo_dorado.png';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen); 
  }
}
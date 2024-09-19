import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EquipoMasculinoComponent } from './paginas/equipo-masculino/equipo-masculino.component';
import { FemeninoComponent } from './paginas/femenino/femenino.component';
import { PartidosComponent } from './paginas/partidos/partidos.component';
import { HistoriaComponent } from './paginas/historia/historia.component';
import { BarraComponent } from './paginas/barra/barra.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipoMasculinoComponent,
    FemeninoComponent,
    PartidosComponent,
    HistoriaComponent,
    BarraComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

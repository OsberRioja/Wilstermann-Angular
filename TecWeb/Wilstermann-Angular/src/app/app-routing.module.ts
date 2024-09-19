import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoMasculinoComponent } from './paginas/equipo-masculino/equipo-masculino.component';
import { FemeninoComponent } from './paginas/femenino/femenino.component';
import { PartidosComponent } from './paginas/partidos/partidos.component';
import { HistoriaComponent } from './paginas/historia/historia.component';
import { BarraComponent } from './paginas/barra/barra.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';

const routes: Routes = [
  {path: 'equipomasculino', component:EquipoMasculinoComponent},
  {path: 'femenino', component:FemeninoComponent},
  {path: 'partidos', component:PartidosComponent},
  {path: 'historia', component:HistoriaComponent},
  {path: 'barra', component:BarraComponent},
  {path: 'noticias', component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDisponibilidadComponent } from './components/add-disponibilidad/add-disponibilidad.component';

const routes: Routes = [
  {path:"addDisponibilidad", component:AddDisponibilidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

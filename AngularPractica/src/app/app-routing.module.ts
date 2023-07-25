import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DominicodeComponent } from './pages/dominicode/dominicode.component';

const routes: Routes = [
  //Estas rutas se leen en orden la ruta '**' siempre debe ir al final

  //Se crea una nueva ruta que muestra el componente dominicode
  {path: 'dominicode', component: DominicodeComponent},
  //Ahora para evitar que se muestre el error de consola cuando se ingresa a rutas que no existen se hace lo siguiente
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

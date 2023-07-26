import { NgModule } from "@angular/core";
//CADA VEZ QUE NECESITE IMPORTAR UN MODULO DE MATERIALS SE INGRESA ACA
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    //MATCARDMODULE SE OCUPA EN PRODUCTS, POR LO QUE MaterialModule TAMBIEN SE DEBE IMPORTAR EN prodcuts.module.ts
 exports:[MatToolbarModule,MatCardModule,MatButtonModule,MatIconModule]
})
export class MaterialModule {}
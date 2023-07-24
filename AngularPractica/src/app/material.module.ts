import { NgModule } from "@angular/core";
//CADA VEZ QUE NECESITE IMPORTAR UN MODULO DE MATERIALS SE INGRESA ACA
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
 exports:[MatToolbarModule]
})
export class MaterialModule {}
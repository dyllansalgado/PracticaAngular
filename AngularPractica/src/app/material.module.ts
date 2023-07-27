import { NgModule } from "@angular/core";
//CADA VEZ QUE NECESITE IMPORTAR UN MODULO DE MATERIALS SE INGRESA ACA
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    //MATCARDMODULE SE OCUPA EN PRODUCTS, POR LO QUE MaterialModule TAMBIEN SE DEBE IMPORTAR EN prodcuts.module.ts
 exports:[MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
]
})
export class MaterialModule {}
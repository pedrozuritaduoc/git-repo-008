import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
<<<<<<< HEAD
// importar reactive form reactivos
//implementar en cada page q usara el formulario
=======
// Importar ReactiveFormModule para formularios reactivos
// Se debe implementar en cada page que usará un formulario 
>>>>>>> 69a9c9f784c76527e298516a72db4efe2f273b3f
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

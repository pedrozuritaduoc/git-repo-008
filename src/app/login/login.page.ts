import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; 
//FormBuilder = Servicio
// Validators = Objeto con funciones
// FormGroup = Tipo de dato de formulario
=======
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// FormBuilder = Servicio.
// Validators = Objeto con funciones.
// FormGroup= Tipo de dato de formulario.
>>>>>>> 69a9c9f784c76527e298516a72db4efe2f273b3f

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formulario: FormGroup;
<<<<<<< HEAD

  constructor(
    private fb: FormBuilder
  ) {
    this.formulario = fb.group({
      //nombre_campo : [valor_del_campo, [validaciones sync],
      //[validaciones asyn] ]
      email: ["", [Validators.required, Validators.email], []],
      contrasenia: ["", [Validators.required, Validators.minLength(6)]]
    });
   }


   public verDatosFormulario(){
    const esValido = this.formulario.valid;
    console.log("Eñ formulario es valido: ", esValido);
    //errores a nivel de validacion del formulario
    console.log("Errores a nivel de formulario: ", this.formulario.errors);
    // Errores a nivel de campo
    const campoEmail = this.formulario.get("email");
    console.log("El email tiene errores:", campoEmail?.errors);
    console.log("El email fue tocado:$: ", campoEmail?.touched);
    // Errores a nivel de contraseña
    const campoContra = this.formulario.get("contrasenia");
    console.log("El email tiene errores:", campoContra?.errors);
    console.log("El email fue tocado:$: ", campoContra?.touched);
   }
=======
  
  constructor(
    private fb: FormBuilder
  ) { 
    this.formulario = fb.group({
      // nombre_campo : [ valor_del_campo, [validaciones sync], [validaciones async] ]
      email: ["", [Validators.required, Validators.email], []],
      contrasenia: ["", [Validators.required, Validators.minLength(6)]]
    }, []);

  }
>>>>>>> 69a9c9f784c76527e298516a72db4efe2f273b3f

  public verDatosFormulario(){
    const esValido = this.formulario.valid;
    console.log("El formulario es valido: ", esValido);
    // Errores a nivel de validación del formulario
    console.log("Erores a nivel de formulario: ",this.formulario.errors);
    // Errores a nivel de campo
    const campoEmail = this.formulario.get("email");
    console.log("El email tiene errores: ",campoEmail?.errors);
    console.log("El email fue tocado :$ :", campoEmail?.touched);
    // Errores de la contraseña
    const campoContra = this.formulario.get("contrasenia");
    console.log("El contraseña tiene errores: ",campoContra?.errors);
    console.log("El contraseña fue tocado :$ :", campoContra?.touched);
    campoContra?.untouched
  }
  ngOnInit() {
  }

}

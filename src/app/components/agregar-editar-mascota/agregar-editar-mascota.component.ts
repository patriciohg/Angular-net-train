import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent {
  loading: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      nombre: ['',Validators.required],
      raza: ['',Validators.required],
      edad: ['',Validators.required],
      color: ['',Validators.required],
      peso: ['',Validators.required]
    });
  }
  agregarMascota(){
    this.loading = !this.loading;
    const nombre = this.form.get('nombre')?.value;
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      edad: this.form.value.edad,
      color: this.form.value.color,
      peso: this.form.value.peso
    }
  }
}

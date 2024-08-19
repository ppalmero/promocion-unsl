import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private dbService: NgxIndexedDBService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      escuela: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      const usuario = this.registroForm.value;
      this.dbService.add('users', usuario).subscribe((key) => {
        console.log('Usuario registrado con ID:', key);
        alert('Usuario registrado exitosamente.');
        this.registroForm.reset();
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
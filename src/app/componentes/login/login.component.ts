import { Component, inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CommonModule } from '@angular/common';
import { ComunicacionService } from '../../servicios/comunicacion.service';
import { Usuario } from '../../modelos/usuario';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<LoginComponent>);
  registroForm: FormGroup;
  //userId: number | null = null; // ID del usuario para editar
  usuarios: any[] = []; // Aquí almacenaremos los usuarios obtenidos

  constructor(private fb: FormBuilder, private dbService: NgxIndexedDBService, public comunicacionService: ComunicacionService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      escuela: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Al iniciar el componente, carga todos los usuarios
    //this.getAllUsers();
    if(this.comunicacionService.isLogIn()){
      this.loadUserData(this.comunicacionService.getUserID());
    }
  }

  loadUserData(id: number) {
    if (id == 0) {
      alert('No hay usuario registrado.');
    } else {
      this.dbService.getByKey('users', id).subscribe((usuario: any) => {
        if (usuario) {
          //this.userId = usuario.id; // Guardamos el ID para actualizar luego
          this.comunicacionService.login(usuario);
          this.registroForm.patchValue({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            dni: usuario.dni,
            escuela: usuario.escuela,
            fechaNacimiento: usuario.fechaNacimiento
          });
        } else {
            alert('No hay usuario registrado.');
        }
      });
    }
  }

  registrar() {
    if (this.registroForm.valid) {
      let usuario:Usuario = this.registroForm.value;
      //if (this.userId) {
      if (this.comunicacionService.isLogIn()) {
        // Si existe un ID, entonces estamos editando
        //this.dbService.update('users', { ...usuario, id: this.userId }).subscribe(() => {
        usuario = this.comunicacionService.completarUsuario(usuario);
        this.dbService.update('users', { ...usuario, id: this.comunicacionService.getUserID() }).subscribe(() => {
          alert('Usuario actualizado exitosamente.');
          this.dialogRef.close();
          //this.registroForm.reset();
          //this.userId = null;
        });
      } else {
        // Si no hay ID, entonces estamos creando un nuevo registro
        usuario.keyGen = crypto.randomUUID();
        usuario.historias = [];
        usuario.envioDatos = false;
        this.dbService.add('users', usuario).subscribe((key) => {
          console.log('Usuario registrado con ID:', key);
          alert('Usuario registrado exitosamente.');
          
          usuario.id = key.id;
          this.comunicacionService.login(usuario);
          this.dialogRef.close();
        });
      }
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const dbConfig: DBConfig = {
  name: 'MyDatabase',
  version: 1,
  objectStoresMeta: [
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'nombre', keypath: 'nombre', options: { unique: false } },
        { name: 'apellido', keypath: 'apellido', options: { unique: false } },
        { name: 'dni', keypath: 'dni', options: { unique: true } },
        { name: 'escuela', keypath: 'escuela', options: { unique: false } },
        { name: 'fechaNacimiento', keypath: 'fechaNacimiento', options: { unique: false } }
      ]
    }
  ]
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([]),
    importProvidersFrom(BrowserAnimationsModule, NgxIndexedDBModule.forRoot(dbConfig)) // Configuración de IndexedDB
  ]
}).catch(err => console.error(err));

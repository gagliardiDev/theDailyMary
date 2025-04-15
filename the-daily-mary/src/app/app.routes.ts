// src/app/app-routing.module.ts
import {  Routes } from '@angular/router';
import { EmConstrucaoComponent } from './pages/em-construcao/em-construcao.component';

export const routes: Routes = [
  { path: 'em-construcao', component: EmConstrucaoComponent },
  { path: '**', redirectTo: 'em-construcao' } // fallback opcional
];



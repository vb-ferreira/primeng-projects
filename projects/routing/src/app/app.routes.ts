import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadPacienteComponent } from './components/cad-paciente/cad-paciente.component';
import { ProntuariosComponent } from './components/prontuarios/prontuarios.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProntuarioComponent } from './components/prontuario/prontuario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'paciente',
    component: CadPacienteComponent
  },
  {
    path: 'prontuarios',
    component: ProntuariosComponent
  },
  {
    path: 'prontuarios',
    children: [
      { path: 'prontuario/:id', component: ProntuarioComponent }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


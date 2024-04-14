import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadPacienteComponent } from './components/cad-paciente/cad-paciente.component';
import { ProntuariosComponent } from './components/prontuarios/prontuarios.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CadPacienteComponent, ProntuariosComponent, 
            ToolbarComponent, SidebarComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
}

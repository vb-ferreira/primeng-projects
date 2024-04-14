import { Component, inject } from '@angular/core';
import { Paciente } from '../../interfaces/paciente';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-prontuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './prontuarios.component.html',
  styleUrl: './prontuarios.component.css'
})
export class ProntuariosComponent {
  listaPacientes: Paciente[] | undefined;
  // Query string
  searchString!: string;

  pacienteService: PacienteService = inject(PacienteService);
  // For read query string
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit() {
    this.listaPacientes = this.pacienteService.pacientes;

    // Ready query string
    this.searchString = this.activeRoute.snapshot.queryParams['search'];
    console.log(this.searchString);
  }
}

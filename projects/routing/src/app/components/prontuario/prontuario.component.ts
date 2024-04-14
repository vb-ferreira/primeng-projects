import { Component, inject, OnInit, Input } from '@angular/core';
import { Paciente } from '../../interfaces/paciente';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prontuario',
  standalone: true,
  imports: [],
  templateUrl: './prontuario.component.html',
  styleUrl: './prontuario.component.css'
})
export class ProntuarioComponent implements OnInit {
  pacienteSelecionado: Paciente | undefined;
  pacienteId!: string;
  
  pacienteService: PacienteService = inject(PacienteService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // Recupera route param com snapshot
    // this.pacienteId = this.activeRoute.snapshot.params['id'];
    // this.pacienteSelecionado = this.pacienteService.pacientes.find(paciente => paciente.id === this.pacienteId);
    
    // Recupera route param com Observable 
    this.activeRoute.params.subscribe((data) => {
      this.pacienteId = data['id'];
      this.pacienteSelecionado = this.pacienteService.pacientes.find(paciente => paciente.id === this.pacienteId);
    })  
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: Router = inject(Router);

  irParaCadastroPaciente() {
    // this.router.navigate(['paciente']);
    this.router.navigateByUrl('paciente');
  }
}

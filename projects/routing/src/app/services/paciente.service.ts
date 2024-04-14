import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  // dados devem vir do json-server
  pacientes: Paciente[] = [
    { id: '1', nome: 'Vinícius'},
    { id: '2', nome: 'Eduardo'},
  ]

  // getAllPacientes(){
  //   return new Observable<Paciente[]>((sub) => {
  //     setTimeout(() => {
  //       sub.next(this.pacientes);
  //     }, 5000)
  //   }) 
  // }
}

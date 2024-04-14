import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // dados devem vir do json-server
  users: User[] = [
    { id: '1', nome: 'Daniela', password: '1234'},
    { id: '2', nome: 'Beatriz', password: '1234'},
    { id: '3', nome: 'Raquel', password: '1234'},
    { id: '4', nome: 'José', password: '1234'},
    { id: '5', nome: 'Marluce', password: '1234'},
  ];
}

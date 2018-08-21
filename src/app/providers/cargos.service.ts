import { Injectable } from '@angular/core';
import { Cargo } from '../class/cargo';

@Injectable({
  providedIn: 'root'
})


export class CargosService {

  cargos: Cargo[]  =  [{nombre: 'Mecanico'}, {nombre: 'Técnico oleo-hidráulico'},
                  {nombre: 'Ingeniero senior de ingeniería mecánica	'}, {nombre: 'Mecánico de mantención	'},
                  {nombre: 'Gerente de operaciones y mantención	'}, {nombre: 'Geologo proyecto minería'},
                  {nombre: 'Electromecánico	'}, {nombre: 'Encargado de tronadura'}
                  , {nombre: 'Jefe de ingeniería'}, {nombre: 'Operador de equipos'}, {nombre: 'Geologo'}, {nombre: 'Supervisor técnico'},
                  {nombre: 'Muestrero'}, {nombre: 'Supervisor de tronadura'}, {nombre: 'Planificador'}, {nombre: 'Control Document'},
                  {nombre: 'Analista Auditor'}, {nombre: 'Analista RRHH'}, {nombre: 'Soldadores'}];

  constructor() { }
}

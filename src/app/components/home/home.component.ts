import { Component, OnInit } from '@angular/core';
import { CargosService } from '../../providers/cargos.service';
import { Cargo } from '../../class/cargo';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var bulmaCarousel: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  animations: [
    trigger('heroState', [
      state('active',   style({
        height: '100 px'
      })),
      transition('* => active', animate('100ms ease-in'))
    ])
  ,
  trigger(
    'enterAnimation', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  )
]
})
export class HomeComponent implements OnInit {

  cargos: Cargo[] = [];
  activar = 'no active';
  seleccion: number;
  activarHero = false;
  constructor(public cs: CargosService) {
    this.cargos = cs.cargos;
  }

  ngOnInit() {
    const carouselbulma = new bulmaCarousel.attach();
  }
  changeStyle(hero: number) {
    this.seleccion = hero;
  }
  desmarcar() {
    this.seleccion = null;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnimacionesService {

  animacionHero = 'No activar';
  constructor() { }

  activarAnimacion() {
    this.animacionHero = 'activar';
    return this.animacionHero;
  }

}

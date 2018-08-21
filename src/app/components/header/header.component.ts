import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  activar = false;

  constructor() { }

  ngOnInit() {
  }
  activarMenu() {
    this.activar = !this.activar;
  }
}

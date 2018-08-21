import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styles: []
})
export class SearchJobsComponent implements OnInit {

  ciudadSearch = '';
  texto = '';

  constructor() { }

  ngOnInit() {
  }
  activar() { }
}

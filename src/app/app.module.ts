import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchJobsComponent } from './components/search-jobs/search-jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimacionesService } from './providers/animaciones.service';
import { TrabajosComponent } from './components/pages/trabajos/trabajos.component';
import { CargosService } from './providers/cargos.service';
import { TrabajosService } from './providers/trabajos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchJobsComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AnimacionesService , CargosService , TrabajosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

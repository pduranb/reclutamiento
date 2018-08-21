import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrabajosComponent } from './components/pages/trabajos/trabajos.component';

const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'trabajos/:cargo', component: TrabajosComponent },
      {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

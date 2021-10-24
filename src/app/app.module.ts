import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Login/login.component';
import { MenuComponent } from './Menu/menu.component';
import { RecepcionistaBusca } from './Recepcionista/BuscaRecepcionista/buscaRecepcionista.component';
import { RecepcionistaAgrega } from './Recepcionista/AgregaRecepcionista/agregaRecepcionista.component';
import { PacienteBusca } from './Paciente/BuscaPaciente/buscaPaciente.component';
import { PacienteAgrega } from './Paciente/AgregaPaciente/agregaPaciente.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'recepcionistaBusca', component: RecepcionistaBusca },
  { path: 'recepcionistaAgrega', component: RecepcionistaAgrega },
  { path: 'pacienteBusca', component: PacienteBusca },
  { path: 'pacienteAgrega', component: PacienteAgrega },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RecepcionistaBusca,
    RecepcionistaAgrega,
    PacienteBusca,
    PacienteAgrega
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

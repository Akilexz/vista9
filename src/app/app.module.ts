import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormPonenteComponent } from './components/form-ponente/form-ponente.component';
import { PonenciasComponent } from './components/ponencias/ponencias.component';
import { FormAsistenteComponent } from './components/form-asistente/form-asistente.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { GestionGeneralComponent } from './components/admin/gestion-general/gestion-general.component';
import { EditarPonenteComponent } from './components/admin/editar-ponente/editar-ponente.component';
import { EditarAsistenteComponent } from './components/admin/editar-asistente/editar-asistente.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FormPonenteComponent,
    PonenciasComponent,
    FormAsistenteComponent,
    InformacionComponent,
    GestionGeneralComponent,
    EditarPonenteComponent,
    EditarAsistenteComponent,
    HeaderComponent,
    LoginComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

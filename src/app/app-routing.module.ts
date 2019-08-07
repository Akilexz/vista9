import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormPonenteComponent } from './components/form-ponente/form-ponente.component';
import { PonenciasComponent } from './components/ponencias/ponencias.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormAsistenteComponent } from './components/form-asistente/form-asistente.component';
import { GestionGeneralComponent } from './components/admin/gestion-general/gestion-general.component';
import { EditarPonenteComponent } from './components/admin/editar-ponente/editar-ponente.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { EditarAsistenteComponent } from './components/admin/editar-asistente/editar-asistente.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'form-ponente', component:FormPonenteComponent},
  {path: 'ponencias', component:PonenciasComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'form-asistente', component:FormAsistenteComponent},
  {path: 'gestion', component:GestionGeneralComponent},
  {path: 'editar-ponente', component:EditarPonenteComponent},
  {path: 'editar-asistente', component:EditarAsistenteComponent},
  {path: 'hd', component:HeaderComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contact', component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

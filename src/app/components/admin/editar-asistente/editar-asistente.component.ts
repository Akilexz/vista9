import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Asistentes } from 'src/app/models/asistentes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-asistente',
  templateUrl: './editar-asistente.component.html',
  styleUrls: ['./editar-asistente.component.scss']
})
export class EditarAsistenteComponent implements OnInit {

  data: any;
  tabla: string;
  asistente: Asistentes;
  nombres: string;
  apellidos: string;
  email: string;
  editarFormAsis: FormGroup;
  respuesta: any[];

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.tabla = 'asistentes';
    this.asistente = {
      id: 0,
      nombres: '',
      apellidos: '',
      email: '',
    };
    this.actualizar();
    this.formularioEdit();
    this.actualizar();
  }
  formularioEdit() {
    this.editarFormAsis = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  actualizar() {
    const id = localStorage.getItem('id');
    console.log(localStorage);
    const tabla = 'asistentes';
    this.http.get<any>(environment.API_URL + `routebyid?tabla=${tabla}&id=` + id).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
      console.log(id);
      console.log(data);
    });
  }
  editData = (id) => {
    const nombres = this.editarFormAsis.get('nombres').value;
    const apellidos = this.editarFormAsis.get('apellidos').value;
    const email = this.editarFormAsis.get('email').value;
    this.data = {
      tabla: 'asistentes',
      datoId: [{
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        email: email
      }]
    };
    if (this.data === null) {
      console.log('dato no encontrado');
    } else {
      this.http.put(environment.API_URL + 'put', this.data).subscribe(resultado => {
        console.log(resultado);
        alert('datos editados');
        this.router.navigate(['gestion']);
      });
    }
  }

}

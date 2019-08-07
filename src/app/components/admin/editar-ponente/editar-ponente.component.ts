import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ponentes } from 'src/app/models/ponentes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-ponente',
  templateUrl: './editar-ponente.component.html',
  styleUrls: ['./editar-ponente.component.scss']
})
export class EditarPonenteComponent implements OnInit {

  data: any;
  tabla: string;
  ponente: Ponentes;
  respuesta: any[];
  editarForm: FormGroup;
  nombres: string;
  apellidos: string;
  email: string;
  categoria: string;
  tema: string;
  resumen: string;
  institucion: string;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.tabla = 'ponentes';
    this.actualizar();
    this.formularioEdit();
  }
  formularioEdit() {
    this.editarForm = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      tema: ['', [Validators.required]],
      resumen: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
    });
  }

  editData = (id) => {
    console.log (id);
    const nombres = this.editarForm.get('nombres').value;
    const apellidos = this.editarForm.get('apellidos').value;
    const email = this.editarForm.get('email').value;
    const categoria = this.editarForm.get('categoria').value;
    const tema = this.editarForm.get('tema').value;
    const resumen = this.editarForm.get('resumen').value;
    const institucion = this.editarForm.get('institucion').value;
    this.data = {
      tabla: this.tabla,
      datoId: [{
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        categoria: categoria,
        tema: tema,
        resumen: resumen,
        institucion: institucion
      }]
    };
    if (this.data === null) {
      console.log('datos no encontrados');
    } else {
      console.log(this.data);
      this.http.put(environment.API_URL + 'put', this.data).subscribe(resultado => {
        console.log(resultado);
        alert('datos editados');
        this.router.navigate(['gestion']);
      });
    }
  }
  actualizar() {
    const id = localStorage.getItem('id');
    console.log(localStorage);
    const tabla = 'ponentes';
    this.http.get<any>(environment.API_URL + `routebyid?tabla=${tabla}&id=` + id).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
      console.log(id);
      console.log(data);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ponentes } from 'src/app/models/ponentes';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-ponente',
  templateUrl: './form-ponente.component.html',
  styleUrls: ['./form-ponente.component.scss']
})
export class FormPonenteComponent implements OnInit {

  data: any
  tabla: string
  ponente: Ponentes
  title: 'sweetalert'

  selectedValue = null

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {

    this.ponente = {
      id: 0,
      nombres: '',
      apellidos: '',
      email: '',
      categoria: ['Tecnológico','Cientifico','Social','Económico'],
      tema: '',
      resumen: '',
      institucion: '',
    };

    this.tabla = 'ponentes';
  }

  postData = () => {
    this.data = {
      tabla: this.tabla,
      datos: this.ponente
    };
    this.http.post(environment.API_URL + 'post', this.data).subscribe(resultado => {
      console.log(resultado);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['ponencias'])
    })
  }
}

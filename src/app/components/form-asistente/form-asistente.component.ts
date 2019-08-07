import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asistentes } from 'src/app/models/asistentes';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-asistente',
  templateUrl: './form-asistente.component.html',
  styleUrls: ['./form-asistente.component.scss']
})
export class FormAsistenteComponent implements OnInit {
  data: any
  tabla: string
  asistente: Asistentes
  title: 'sweetalert'

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {

    this.asistente = {
      id:0,
      nombres: '',
      apellidos: '',
      email: ''
    };

    this.tabla = 'asistentes';
  }

  postData = () => {
    this.data = {
      tabla: this.tabla,
      datos: this.asistente
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

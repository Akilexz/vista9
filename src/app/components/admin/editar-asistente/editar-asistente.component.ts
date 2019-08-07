import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Asistentes } from 'src/app/models/asistentes';

@Component({
  selector: 'app-editar-asistente',
  templateUrl: './editar-asistente.component.html',
  styleUrls: ['./editar-asistente.component.scss']
})
export class EditarAsistenteComponent implements OnInit {

  data: any;
  tabla: string;
  asistente: Asistentes;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.tabla = 'asistentes';
    this.asistente = {
      id: 0,
      nombres: '',
      apellidos: '',
      email: '',
    };

    this.actualizar();
  }

  editData = () => {
    this.data = {
      tabla: this.tabla,
      datoId: [this.asistente]
    };
    if (this.data === null) {
      console.log('no gracias');
    } else {
      this.http.put(environment.API_URL + 'put', this.data).subscribe(resultado => {
        console.log(resultado);
        alert('datos editados');
        this.router.navigate(['gestion']);
      });
    }
  }
  actualizar() {
    const id = localStorage.getItem('id');
    console.log(id);
  }

}

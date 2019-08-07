import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ponencias',
  templateUrl: './ponencias.component.html',
  styleUrls: ['./ponencias.component.scss']
})
export class PonenciasComponent implements OnInit {

  respuesta: any[];
  table_ponencias: any[];

  contador: number = 0
  keepAsistencia: any[]

  respuesta_gestion: any[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getData()
    this.table_ponencias = [
      {
        id: 'Id',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        email: 'Email',
        categoria: 'Categoria',
        tema: 'Tema',
        resumen: 'Resumen',
        institucion: 'Institución'
      }]
  }

  getData = () => {
    const tabla = 'ponentes';
    this.http.get<any>(environment.API_URL + `get?tabla=${tabla}`).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
    });

    const tablaGestion = 'gestion'
    this.http.get<any>(environment.API_URL + `get?tabla=${tablaGestion}`).subscribe(data => {
      this.respuesta_gestion = data.datos;
      console.log(this.respuesta_gestion);
    });
  }

  cambiar() {
    if (this.contador <= 19) {
      this.contador++
      alert('Asistencia programada');

      this.router.navigate(['home'])
      console.log(this.contador)
    } else {
      alert('Congreso Lleno')
    }
  }

}

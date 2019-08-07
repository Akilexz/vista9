import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public titulo: string
  respuesta: any[];
  imagen: any
  respuesta_imagenes: any[];

  respuesta_gestion: any[];

  constructor(private http: HttpClient) {
    this.titulo = "Primer Congreso Institucional Yavirac"
  }

  ngOnInit() {
    this.getData()
  }

  getData = () => {
    const tabla = 'images';
    this.http.get<any>(environment.API_URL + `get?tabla=${tabla}`).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
      this.imagen = this.respuesta
    });
    
    const tablaImagen = 'images'
    this.http.get<any>(environment.API_URL + `get?tabla=${tablaImagen}`).subscribe(data => {
      this.respuesta_imagenes = data.datos;
      console.log(this.respuesta_imagenes);
    });

    const tablaGestion = 'gestion'
    this.http.get<any>(environment.API_URL + `get?tabla=${tablaGestion}`).subscribe(data => {
      this.respuesta_gestion = data.datos;
      console.log(this.respuesta_gestion);
    });
  }


}

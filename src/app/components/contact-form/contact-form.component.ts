import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  respuesta_gestion: any[];

  constructor(private http:HttpClient) { }

  ngOnInit() {

  this.getData()
  }

  getData = () => {
    const tablaGestion = 'gestion'
    this.http.get<any>(environment.API_URL + `get?tabla=${tablaGestion}`).subscribe(data => {
      this.respuesta_gestion = data.datos;
      console.log(this.respuesta_gestion);
    });
  }

}

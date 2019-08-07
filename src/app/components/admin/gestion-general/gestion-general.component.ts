import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ponentes } from 'src/app/models/ponentes';
import { Asistentes } from 'src/app/models/asistentes';
import { Gestion } from 'src/app/models/gestionParametros';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-gestion-general',
  templateUrl: './gestion-general.component.html',
  styleUrls: ['./gestion-general.component.scss']
})
export class GestionGeneralComponent implements OnInit {

  base64textString: String = "";

  ponente: Ponentes;
  deletePonentes: any;
  tablaPonentes: string;

  asistente: Asistentes;
  deleteAsistentes: any;
  tablaAsistentes: string;

  data: any;
  datoEliminar: any;

  table_ponentes: any[];
  respuesta_ponentes: any[];

  table_asistentes: any[];
  respuesta_asistentes: any[];


  /*======================== GESTION PARAMETROS =======================*/

  dataGestion: any
  gestion: Gestion;
  tablaGestion: string;

  /*======================== FIN GESTION PARAMETROS =======================*/

  constructor(
    private http: HttpClient,
    private router: Router,
    private _sanitizer: DomSanitizer) {
    // this.files = [];
  }

  ngOnInit() {
    this.getData();

    this.table_ponentes = [
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

    this.table_asistentes = [
      {
        id: 'Id',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        email: 'Email'
      }]

    this.tablaPonentes = 'ponentes';

    this.tablaAsistentes = 'asistentes'

    this.deletePonentes = {
      tabla: this.tablaPonentes,
      id: this.datoEliminar
    };

    this.deleteAsistentes = {
      tabla: this.tablaAsistentes,
      id: this.datoEliminar
    };


    /*======================== GESTION PARAMETROS =======================*/

    this.gestion = {
      id: 0,
      tituloCongreso: '',
      direccionCorreo: '',
      paginaWeb: '',
      informacion: '',
      tituloCronograma: '',
      telefono: '',
      correoUno: '',
      correoDos: '',
    };

    this.tablaGestion = 'gestion';

    /*======================== FIN GESTION PARAMETROS =======================*/

  }

  getData = () => {
    const tablaPonente = 'ponentes';
    const tablaAsistente = 'asistentes';

    this.http.get<any>(environment.API_URL + `get?tabla=${tablaPonente}`).subscribe(data => {
      this.respuesta_ponentes = data.datos;
      console.log(this.respuesta_ponentes);
    });

    this.http.get<any>(environment.API_URL + `get?tabla=${tablaAsistente}`).subscribe(data => {
      this.respuesta_asistentes = data.datos;
      console.log(this.respuesta_asistentes);
    });
  }


  editarPonente = (id: any) => {
    this.data = {
      tabla: this.tablaPonentes,
      idPonente: id
    };
    console.log(this.data);
    localStorage.removeItem('id');
    localStorage.setItem('id', this.data.idPonente.toString());
    this.router.navigate(['editar-ponente']);
  }

  editarAsistente = (id: any) => {
    this.data = {
      tabla: this.tablaAsistentes,
      idAsistente: id
    };
    console.log(this.data);
    localStorage.removeItem('id');
    localStorage.setItem('id', this.data.idAsistente.toString());
    this.router.navigate(['editar-asistente']);
  }

  borrarPonente = (id: number) => {
    console.log(id);
    this.data = {
      tabla: this.tablaPonentes,
      datoId: id
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
    };
    console.log(this.data);
    if (this.data !== undefined) {
      this.http.post(environment.API_URL + 'delete', this.data).subscribe(resultado => {
        console.log(resultado);
        this.router.navigate(['gestion']);
      });
    }

  }

  borrarAsistente = (id: number) => {
    console.log(id);
    this.data = {
      tabla: this.tablaAsistentes,
      datoId: id
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
    };
    console.log(this.data);
    if (this.data !== undefined) {
      this.http.post(environment.API_URL + 'delete', this.data).subscribe(resultado => {
        console.log(resultado);
        this.router.navigate(['gestion']);
      });
    }

  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);

    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  addImage = () => {
    let tabla = 'images'
    let data = {
      tabla: tabla,
      datos: [{
        nombre: this.base64textString
      }]
    }
    this.http.post(environment.API_URL + 'post', data).subscribe(resultado => {
      console.log(resultado);
      this.router.navigate(['gestion'])
    })
  }

  crearPDF() {
    const doc = new jsPDF({
      orientation: 'L',
      unit: 'mm',
      format: 'a2',
      putOnlyUsedFonts: true,
      compress: true
    });

    var elementHandler = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }
    };
    var source = window.document.getElementsByTagName("body")[0];
    doc.fromHTML(
      source,
      15,
      15,
      {
        'width': 180, 'elementHandlers': elementHandler
      });

    doc.output("dataurlnewwindow");
  }


  /*======================== GESTION PARAMETROS =======================*/

  postDataGestion = () => {
    this.dataGestion = {
      tabla: this.tablaGestion,
      datos: this.gestion
    };
    this.http.post(environment.API_URL + 'post', this.dataGestion).subscribe(resultado => {
      console.log(resultado);
      window.location.reload()
    })
  }


  /*======================== FIN GESTION PARAMETROS =======================*/

}


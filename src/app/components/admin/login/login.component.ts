import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Logins } from 'src/app/models/logInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any
  users: string
  login: any
  login2: Login[]
  login3: Logins[]
  title: 'sweetalert'
  respuesta: any[]
  respuesta2: any[]
  dome: any

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {

    this.getData()
    this.login2 = []
    this.login3 = []
    this.login = [
      {
        user: '',
        password: ''
      }
    ]
  }

  getData = () => {
    let tabla = 'users'
    this.http.get<any>(environment.API_URL + `get?tabla=${tabla}`).subscribe(resultado => {
      this.respuesta = resultado.datos;
      this.respuesta.forEach(element => {
        this.login2.push(element.user)
        this.login3.push(element.password)
      })
      console.log(this.login2[0])
      console.log(this.login3[0])
    })
  }

  datos = (dome) => {
    this.respuesta2 = dome
    this.respuesta.forEach(element => {
      this.login.push(element.user)
    })
    console.log(this.login.user)
  }

  metodo = () => {
    if (this.login.user == this.login2[0] && this.login.password == this.login3[0]) {
      this.router.navigate(['gestion'])
    } else {
      alert('DATOS INCORRECTOS')
    }
  }
}

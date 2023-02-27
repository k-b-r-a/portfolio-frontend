import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService, Nombre } from 'src/app/service/email.service';
import { ImgService } from 'src/app/service/img.service';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { TextService, Inicio } from 'src/app/service/text.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(
    private nombreService: EmailService,
    private router: Router,
    private textService: TextService,
    private imgService: ImgService,
    private loginuserService: LoginuserService
  ) {}

  id: string = '';
  Texts: any;
  Imgl: any;
  binding: any;
  Login = 'Login';
  logged = 'hidden';
  Logged = '';
  editable = true;
  classLogin = 'login-invisible';
  NombreNueva: Nombre = {
    id: '',
    nombre: '',
    apellido: '',
    message: '',
    email: '',
  };

  TextoNuevo: Inicio = {
    id: '',
    nombre: '',
    message: '',
  };

  user: User = new User();

  ngOnInit(): void {
    this.Inicio();
  }
  title = 'Portfolio Website';
  agregarNombre() {
    this.nombreService.saveNombre(this.NombreNueva).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Inicio() {
    this.textService.getText().subscribe({
      next: (res) => {
        this.Texts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.imgService.getImg().subscribe({
      next: (res) => {
        this.Imgl = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  login() {
    if (this.Login != 'Login') {
      this.classLogin = 'login-invisible';
      this.editable = true;
      this.logged = 'hidden';
      this.Logged = '';
      this.Login = 'Login';

      return;
    }
    if (this.classLogin != 'login-visible' && this.Login == 'Login') {
      return (this.classLogin = 'login-visible');
    } else {
      return (this.classLogin = 'login-invisible');
    }
  }
  userLogin() {
    this.loginuserService.loginUser(this.user).subscribe({
      next: (res) => {
        this.classLogin = 'login-invisible';
        this.Login = 'Logout';
        this.logged = '';
        this.Logged = 'hidden';
        this.editable = false;
      },
      error: (err) => {
        alert('invalid user or password');
      },
    });
  }

  editado(b: any) {
    var a = null;
    for (let i = 0; i < this.Texts.length; i++) {
      a = b == this.Texts[i].nombre;
      if (a == true) {
        this.TextoNuevo.nombre = b;
        this.id = this.Texts[i].id;
        this.TextoNuevo.id = this.Texts[i].id;
        alert('saved');
        this.guardado();
      }
    }
    console.log(this.TextoNuevo);
  }

  guardado() {
    this.textService.editarText(this.id, this.TextoNuevo).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  text(b: any) {
    var a = null;
    if (this.Texts !== undefined) {
      for (let i = 0; i < this.Texts.length; i++) {
        a = b == this.Texts[i].nombre;
        if (a == true) {
          return this.Texts[i].message;
        }
      }
    }
  }

  textEdit(b: any) {
    var a = null;
    if (this.Texts !== undefined) {
      for (let i = 0; i < this.Texts.length; i++) {
        a = b == this.Texts[i].nombre;
        if (a == true) {
          return this.Texts[i].id;
        }
      }
    }
  }

  img(b: any) {
    var a = null;
    if (this.Imgl !== undefined) {
      for (let i = 0; i < this.Imgl.length; i++) {
        a = b == this.Imgl[i].nombre;
        if (a == true) {
          return this.Imgl[i].url;
        }
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService, Nombre } from 'src/app/service/email.service';
import { ImgService } from 'src/app/service/img.service';
import { TextService } from 'src/app/service/text.service';

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
    private imgService: ImgService
  ) {}
  Texts: any;
  Imgl: any;
  NombreNueva: Nombre = {
    id: '',
    nombre: '',
    apellido: '',
    message: '',
    email: '',
  };
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
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.imgService.getImg().subscribe({
      next: (res) => {
        this.Imgl = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Text(b: any) {
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
  Img(b: any) {
    var a = null;
    if (this.Texts !== undefined) {
      for (let i = 0; i < this.Imgl.length; i++) {
        a = b == this.Imgl[i].nombre;
        if (a == true) {
          return this.Imgl[i].url;
        }
      }
    }
  }
}

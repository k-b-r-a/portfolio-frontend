import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService, Nombre } from 'src/app/service/email.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(private nombreService:EmailService, private router:Router) {}
  NombreNueva: Nombre={id:'',nombre:'',apellido:'', message:'',email:''};
  ngOnInit(): void {
  }

  agregarNombre(){
    this.nombreService.saveNombre(this.NombreNueva).subscribe(
      {
        next: (res)  => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      }
    );
  }
}


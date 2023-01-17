import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService, Nombre } from 'src/app/service/email.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  NombreNueva: Nombre={id:'',nombre:'',apellido:'', message:'',email:''};
  constructor(private nombreService:EmailService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarNombre(){
    this.nombreService.saveNombre(this.NombreNueva).subscribe(
      {
        next: (res)  => {
          this.router.navigate(['/api']);
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      }
    );
  }
}

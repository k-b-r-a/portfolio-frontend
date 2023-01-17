import { Component, OnInit } from '@angular/core';
import { EmailService, Nombre } from 'src/app/service/email.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  id: string = '';
  NombreActual: Nombre = {
    id: '',
    nombre: '',
    apellido: '',
    message: '',
    email: '',
  };
  NombreDespues: Nombre = {
    id: '',
    nombre: '',
    apellido: '',
    message: '',
    email: '',
  };
  constructor(
    private emailService: EmailService,
    private antivateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.antivateRouter.snapshot.params['id'];
    this.emailService.getUnNombre(this.id).subscribe({
      next: (res) => {
        this.NombreActual = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  guardado() {
    this.emailService.editarNombre(this.id, this.NombreDespues).subscribe({
      next: (res) => {
        this.router.navigate(['/api']);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

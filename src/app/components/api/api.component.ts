import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  lista: any;
  isChecked:any;
  constructor(private nombreService: EmailService) {}

  ngOnInit(): void {
    this.listarNombres();
  }
  checkValue(event: any){
    console.log(this.isChecked = event);
    return this.isChecked = event
  }
  listarNombres() {
    this.nombreService.getNombres().subscribe({
      next: (res)  => {
        this.lista=res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  eliminar()
  {
    this.nombreService.deleteNombre(this.isChecked).subscribe({
      next:(res)=>{this.ngOnInit();},
      error: (err)=>console.log(err)
    }
    );
  }
}

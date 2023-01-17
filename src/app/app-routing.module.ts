import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ApiComponent } from './components/api/api.component';

const routes: Routes = [  
{path: '',component: InicioComponent },
{path: 'api', component: ApiComponent },
{path: 'api/agregar', component: AgregarComponent },
{path: 'api/editar/:id', component: EditarComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

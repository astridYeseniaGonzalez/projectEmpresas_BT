import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent} from './view/agregar/agregar.component';
import { EditarComponent} from './view/editar/editar.component';
import { DashboardComponent} from './view/dashboard/dashboard.component';

const routes: Routes = [
  {path: '',
   redirectTo:'dashboard',
   pathMatch:'full'
  },{
    path:'dashboard', component:DashboardComponent
  },{
    path:'agregar', component:AgregarComponent
  },{
    path:'editar/:id', component:EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,AgregarComponent,EditarComponent]

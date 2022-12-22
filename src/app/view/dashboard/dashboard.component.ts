import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api/api/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public Empresas:Array<any> = []
  constructor(private api:ApiService, private router:Router){}
  ngOnInit(): void{
    this.api.getEmpresa().subscribe((data:any)=>{
      console.log(data)
      this.Empresas = data
    })
  }

  editarEmpresa(id: any){
    this.router.navigate(['editar', id])
  }

  eliminarEmpresa(id: any){
    console.log(id);
  }

  agregarEmpresa(){
    this.router.navigate(['agregar']);
  }

}

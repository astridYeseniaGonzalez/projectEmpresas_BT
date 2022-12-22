import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../servicios/api/api/api.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService){}
  agregarFor = new FormGroup({
    nombre_comercial: new FormControl(''),
    razon_social: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    nit: new FormControl(''),
    direccion: new FormControl(''),
    estado: new FormControl('')
  })

  postForm(form:any){
    let editEmpresa = this.activerouter.snapshot.paramMap.get('id')
    this.api.postAgregarEmpresa(form).subscribe(data =>{
      console.log(data)
    })
  }
  regresar(){
    this.router.navigate(['dashboard'])
  }
}

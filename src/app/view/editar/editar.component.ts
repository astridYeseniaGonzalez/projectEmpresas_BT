import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService){}
  ngOnInit(): void{
    let editEmpresa = this.activerouter.snapshot.paramMap.get('id')
    this.api.getDatosEmpresa(editEmpresa).subscribe((data:any) =>{
      console.log(data.nombre_comercial)
      this.editarFor.setValue({
        'nombre_comercial': data.nombre_comercial,
        'razon_social': data.razon_social,
        'telefono': data.telefono,
        'correo': data.correo,
        'nit': data.nit,
        'direccion': data.direccion,
        'estado': data.estado
      })
    })
  }
  editarFor = new FormGroup({
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
    this.api.putEditarDatos(form,editEmpresa).subscribe(data =>{
      console.log(data)
    })
  }

  
  regresar(){
    this.router.navigate(['dashboard'])
  }
}

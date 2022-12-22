import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = ""
  constructor(private http:HttpClient) { }

  getEmpresa(){
    let url = 'https://apitest-bt.herokuapp.com/api/v1/empresas'
    let heades = new HttpHeaders()
    return this.http.get(url,{

    })
  }

  getDatosEmpresa(id:any){
    let heades = new HttpHeaders()
    let url = 'https://apitest-bt.herokuapp.com/api/v1/empresas'+"/"+id
    return this.http.get(url,{

    })
  }

  putEditarDatos(form:any,id:any){
    let heades = new HttpHeaders()
    let url = 'https://apitest-bt.herokuapp.com/api/v1/empresas'+"/"+id
    return this.http.put<Response>(url, form)
  }

  postAgregarEmpresa(form:any){
    let heades = new HttpHeaders()
    let url = 'https://apitest-bt.herokuapp.com/api/v1/empresas'
    return this.http.post<Response>(url, form)
  }
  
}


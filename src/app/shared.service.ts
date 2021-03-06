import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "https://localhost:5001/api";
  

  decoded:any

  constructor(private http:HttpClient,private router:Router) { }

 logcus(val:any){
    return this.http.post(this.APIurl+"/customer/login",val)
  }

  logfar(val:any){
    return this.http.post(this.APIurl+"/farmer/login",val)
  }

  logadm(val:any){
    return this.http.post(this.APIurl+"/admin/login",val)
  }

  logcou(val:any){
    return this.http.post(this.APIurl+"/courier/login",val)
  }

  addcus(val:any){
    return this.http.post(this.APIurl+"/customer/register",val)
  }

  addfar(val:any){
    return this.http.post(this.APIurl+"/farmer/register",val)
  }
}

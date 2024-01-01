import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private router:Router,private http:HttpClient) { }

  alladmins():Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Users/GetAllAdmins');
  }

  addadmin(admin:any):Observable<any> {
    return this.http.post('http://webservicesapp.qdlibya.com/api/Users/CreateAdmin',admin);
  }

  editadmin(id:any,admin:any):Observable<any> {
    return this.http.put('http://webservicesapp.qdlibya.com/api/Users/UpdateAdmin/'+id,admin);
  }

  deleteadmin(id:any):Observable<any> {
    return this.http.delete('http://webservicesapp.qdlibya.com/api/Users/DeleteAdmin/'+id);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private router:Router,private http:HttpClient) { }

  allcities():Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Cities');
  }

  addcity(city:any):Observable<any> {
    return this.http.post('http://webservicesapp.qdlibya.com/api/Cities',city);
  }


  editcity(id:any,city:any):Observable<any> {
    return this.http.put('http://webservicesapp.qdlibya.com/api/Cities/'+id,city);
  }

  deletecity(id:any):Observable<any> {
    return this.http.delete('http://webservicesapp.qdlibya.com/api/Cities/'+id);
  }

 


}

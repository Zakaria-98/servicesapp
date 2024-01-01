import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private router:Router,private http:HttpClient) { }

  allcategories():Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Services-Types');
  }

  addcategory(category:any):Observable<any> {
    return this.http.post('http://webservicesapp.qdlibya.com/api/Services-Types',category);
  }

  editcategory(id:any,category:any):Observable<any> {
    return this.http.put('http://webservicesapp.qdlibya.com/api/Services-Types/'+id,category);
  }

  deletecategory(id:any):Observable<any> {
    return this.http.delete('http://webservicesapp.qdlibya.com/api/Services-Types/'+id);
  }
}

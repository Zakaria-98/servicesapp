import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router:Router,private http:HttpClient) { }

  searchuser(email:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Users/FindByEmail/email?email='+email);
  }

}

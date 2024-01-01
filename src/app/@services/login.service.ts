import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router,private http:HttpClient) { }

  loginfun(email:any,password:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Users/login/'+email+'/'+password).pipe(catchError(this.handleError));
  }

  forgetpassword(email:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Users/ChangePasswordEmail?email='+email+'&uri=http://localhost:4200/auth/register/change').pipe(catchError(this.handleError));
  }

  changepassword(id:any,password:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Users/ChangePassword/'+id+'/'+password).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error.message));
  }


  isLogin(){

    if( localStorage.getItem("Token") == null )
      return false;
    else
      return true
  }

  isadmin(){
   
    
    if( localStorage.getItem("rule") == "1" )
      return true;
     else if( localStorage.getItem("rule") == "2" )
      return false
      else
      return false



  }

  logOut(){

    this.router.navigateByUrl("/auth/login");
    localStorage.removeItem('Token')
    localStorage.removeItem('rule')
  }

  getToken(){

    return localStorage.getItem("Token");
  }

/*
  getTokenExpiredDate(){

    return this.helper.getTokenExpirationDate(this.getToken())
  }

  isTokenExpired(){

    return this.helper.isTokenExpired(this.getToken())
  }*/
}

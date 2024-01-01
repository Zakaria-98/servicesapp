import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private router:Router,private http:HttpClient) { }

  getaccount():Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Profiles/37B4918D-254D-42A9-7048-08DB854479DD').pipe(catchError(this.handleError));
  }

 postaccount(id:any,account:any):Observable<any> {
    return this.http.put('http://webservicesapp.qdlibya.com/api/Profiles/'+id,account).pipe(catchError(this.handleError));
  }
  
  getaccountbyid(id:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Profiles/'+id).pipe(catchError(this.handleError));
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

}

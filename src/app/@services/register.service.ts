import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) { }

  
  register(regObject:any):Observable<any> {
    return this.http.post('http://webservicesapp.qdlibya.com/api/Users/Register?uri=http://localhost:4200/auth/confirm/user',regObject).pipe(catchError(this.handleError));
  }

  confirm(id:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Users/EmailConfirm/'+id).pipe(catchError(this.handleError));
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

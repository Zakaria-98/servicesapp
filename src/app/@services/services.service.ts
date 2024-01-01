import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
keword:any='ccc';
  constructor(private router:Router,private http:HttpClient) { }

  allservices():Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Services');
  }

 searchservices(keyword:any ,CityID:any,ServiceTypeID:any,UserID:any,ReviewsAverage:any,Email:any,Page:any,PageSize:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Services/Search?Keyword='+keyword+'&CityID='+CityID+
    '&ServiceTypeID='+ServiceTypeID+'&UserID='+UserID+'&ReviewsAverage='+ReviewsAverage+'&Email='+Email+'&Page='+Page+"&PageSize="+PageSize);
  }

  addservice(service:any):Observable<any> {
    return this.http.post('http://webservicesapp.qdlibya.com/api/Services',service);
  }

  verifyservice(id:any){
    return this.http.get('http://webservicesapp.qdlibya.com/api/Services/verify/'+id);

  }

  getservice(id:any):Observable<any> {
    return this.http.get('http://webservicesapp.qdlibya.com/api/Services/'+id);
  }

  deleteservice(id:any){
    return this.http.delete('http://webservicesapp.qdlibya.com/api/Services/'+id);
  }
  addcomment(comment:any):Observable<any> {
    return this.http.post('http://webservicesapp.qdlibya.com/api/Services/AddComment',comment);
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
